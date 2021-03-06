// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "./IERC1155.sol";
import "./IERC1155MetadataURI.sol";
import "./IERC1155TokenReceiver.sol";

import "../../ERC165/ERC165.sol";

/// @title Minimalist standard ERC1155 implementation.
contract ERC1155 is IERC1155, ERC165 {
  /// @notice Represents the balances of the token holders by the token ids.
  /// @dev Mapping address:tokenId:balance
  mapping(address => mapping(uint256 => uint256)) public _balances;

  /// @notice Represents the approvals of the token owners to the operators.
  /// @dev Mapping address:operatorAddress:approved
  mapping(address => mapping(address => bool)) public _approvals;

  /**
   * @inheritdoc IERC1155
   * @dev See {IERC1155-balanceOf}.
   */
  function balanceOf(address owner, uint256 id) public view virtual override returns (uint256 balance) {
    require(owner != address(0), "ERC1155: Invalid address");

    balance = _balances[owner][id];
  }

  /**
   * @inheritdoc IERC1155
   * @dev See {IERC1155-balanceOfBatch}.
   */
  function balanceOfBatch(address[] calldata owners, uint256[] calldata ids)
    public
    view
    virtual
    override
    returns (uint256[] memory balances)
  {
    require(owners.length == ids.length, "ERC1155: Owners and amounts length mistmatch");

    balances = new uint256[](owners.length);

    unchecked {
      for (uint256 i = 0; i < owners.length; ++i) {
        balances[i] = _balances[owners[i]][ids[i]];
      }
    }
  }

  /**
   * @inheritdoc IERC1155
   * @dev See {IERC1155-setApprovalForAll}.
   */
  function setApprovalForAll(address operator, bool approved) public virtual override {
    _approvals[msg.sender][operator] = approved;

    emit ApprovalForAll(msg.sender, operator, approved);
  }

  /**
   * @dev See {IERC1155-isApprovedForAll}.
   */
  function isApprovedForAll(address account, address operator) public view virtual override returns (bool) {
    return _approvals[account][operator];
  }

  /**
   * @inheritdoc IERC1155
   * @dev See {IERC1155-safeTransferFrom}.
   */
  function safeTransferFrom(
    address from,
    address to,
    uint256 id,
    uint256 amount,
    bytes calldata data
  ) public virtual override {
    require(from == msg.sender || _approvals[from][msg.sender], "ERC1155: Caller is not authorized");

    _balances[from][id] -= amount;
    _balances[to][id] += amount;

    emit TransferSingle(msg.sender, from, to, id, amount);

    require(
      to.code.length == 0
        ? to != address(0)
        : IERC1155TokenReceiver(to).onERC1155Received(msg.sender, from, id, amount, data) ==
          IERC1155TokenReceiver.onERC1155Received.selector,
      "ERC1155: Unsafe recipient"
    );
  }

  /**
   * @inheritdoc IERC1155
   * @dev See {IERC1155-safeBatchTransferFrom}.
   */
  function safeBatchTransferFrom(
    address from,
    address to,
    uint256[] calldata ids,
    uint256[] calldata amounts,
    bytes calldata data
  ) public virtual override {
    require(ids.length == amounts.length, "ERC1155: Ids and amounts length mistmatch");

    require(from == msg.sender || _approvals[from][msg.sender], "ERC1155: Caller is not authorized");

    uint256 tokenId;
    uint256 tokenAmount;

    for (uint256 i = 0; i < ids.length; ) {
      tokenId = ids[i];
      tokenAmount = amounts[i];

      _balances[from][tokenId] -= tokenAmount;
      _balances[to][tokenId] += tokenAmount;

      // An array can't have a total length
      // larger than the max uint256 value.
      unchecked {
        ++i;
      }
    }

    emit TransferBatch(msg.sender, from, to, ids, amounts);

    require(
      to.code.length == 0
        ? to != address(0)
        : IERC1155TokenReceiver(to).onERC1155BatchReceived(msg.sender, from, ids, amounts, data) ==
          IERC1155TokenReceiver.onERC1155BatchReceived.selector,
      "ERC1155: Unsafe recipient"
    );
  }

  function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {
    return
      interfaceId == 0x01ffc9a7 || // ERC165 Interface ID for ERC165
      interfaceId == 0xd9b67a26 || // ERC165 Interface ID for ERC1155
      interfaceId == 0x0e89341c; // ERC165 Interface ID for ERC1155MetadataURI
  }

  function _mint(
    address to,
    uint256 id,
    uint256 amount,
    bytes memory data
  ) internal virtual {
    _balances[to][id] += amount;

    emit TransferSingle(msg.sender, address(0), to, id, amount);

    require(
      to.code.length == 0
        ? to != address(0)
        : IERC1155TokenReceiver(to).onERC1155Received(msg.sender, address(0), id, amount, data) ==
          IERC1155TokenReceiver.onERC1155Received.selector,
      "ERC1155: Unsafe recipient"
    );
  }

  function _mintBatch(
    address to,
    uint256[] memory ids,
    uint256[] memory amounts,
    bytes memory data
  ) internal virtual {
    uint256 idsLength = ids.length;

    require(idsLength == amounts.length, "ERC1155: Ids and amounts length mistmatch");

    for (uint256 i = 0; i < idsLength; i++) {
      _balances[to][ids[i]] += amounts[i];
    }

    emit TransferBatch(msg.sender, address(0), to, ids, amounts);

    require(
      to.code.length == 0
        ? to != address(0)
        : IERC1155TokenReceiver(to).onERC1155BatchReceived(msg.sender, address(0), ids, amounts, data) ==
          IERC1155TokenReceiver.onERC1155BatchReceived.selector,
      "ERC1155: Unsafe recipient"
    );
  }

  /// @dev Destroys an amount of tokens of type id from the balance of the owner.
  function _burn(
    address from,
    uint256 id,
    uint256 amount
  ) internal virtual {
    _balances[from][id] -= amount;

    emit TransferSingle(msg.sender, from, address(0), id, amount);
  }

  /// @dev Batch destroys an amounts of tokens of type ids from the balance of the owner.
  function _batchBurn(
    address from,
    uint256[] memory ids,
    uint256[] memory amounts
  ) internal virtual {
    uint256 idsLength = ids.length;

    require(idsLength == amounts.length, "ERC1155: Ids and amounts length mistmatch");

    for (uint256 i = 0; i < idsLength; i++) {
      _balances[from][ids[i]] -= amounts[i];
    }

    emit TransferBatch(msg.sender, from, address(0), ids, amounts);
  }
}

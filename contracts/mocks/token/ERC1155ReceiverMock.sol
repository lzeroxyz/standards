// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../../token/ERC1155/IERC1155TokenReceiver.sol";

contract ERC1155ReceiverMock is IERC1155TokenReceiver {
  constructor() {}

  function onERC1155Received(
    address _operator,
    address _from,
    uint256 _id,
    uint256 _value,
    bytes calldata _data
  ) external override returns (bytes4) {
    return IERC1155TokenReceiver.onERC1155Received.selector;
  }

  function onERC1155BatchReceived(
    address _operator,
    address _from,
    uint256[] calldata _ids,
    uint256[] calldata _values,
    bytes calldata _data
  ) external override returns (bytes4) {
    return IERC1155TokenReceiver.onERC1155BatchReceived.selector;
  }
}

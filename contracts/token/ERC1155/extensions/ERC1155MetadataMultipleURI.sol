// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "../ERC1155.sol";
import "../IERC1155MetadataURI.sol";

contract ERC1155MetadataMultipleURI is ERC1155, IERC1155MetadataURI {
  /// @notice Store an array of uris for all the tokens
  mapping(uint256 => string) private _uris;

  /// @inheritdoc IERC1155MetadataURI
  /// @dev See {IERC1155MetadataURI-uri }
  function uri(uint256 id) external view virtual override returns (string memory tokenUri) {
    tokenUri = _uris[id];

    require(bytes(tokenUri).length > 0, "ERC1155: Uri not found");
  }

  function _setURI(uint256 id, string memory newUri) internal virtual {
    _uris[id] = newUri;
  }
}

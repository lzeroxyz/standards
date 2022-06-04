// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "../ERC1155.sol";
import "../IERC1155MetadataURI.sol";

contract ERC1155MetadataGlobalURI is ERC1155, IERC1155MetadataURI {
  /// @notice Store a generic uri for all the tokens
  string private _uri;

  constructor(string memory tokenUri) {
    _setURI(tokenUri);
  }

  /// @inheritdoc IERC1155MetadataURI
  /// @dev See {IERC1155MetadataURI-uri }
  function uri(uint256) external view virtual override returns (string memory) {
    return _uri;
  }

  function _setURI(string memory newUri) internal virtual {
    _uri = newUri;
  }
}

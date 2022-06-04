// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0;

import "../ERC1155Mock.sol";
import "../../../token/ERC1155/extensions/ERC1155MetadataGlobalURI.sol";

contract ERC1155MetadataGlobalURIMock is ERC1155Mock, ERC1155MetadataGlobalURI {
  constructor() ERC1155MetadataGlobalURI("https://token-cdn.domain/") {}
}

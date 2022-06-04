// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0;

import "../ERC1155Mock.sol";
import "../../../token/ERC1155/extensions/ERC1155MetadataMultipleURI.sol";

contract ERC1155MetadataMultipleURIMock is ERC1155Mock, ERC1155MetadataMultipleURI {
  function mint(uint256 id, uint256 amount) public override {}

  function burn() public override {}
}

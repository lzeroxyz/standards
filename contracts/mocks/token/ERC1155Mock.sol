// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../../token/ERC1155/ERC1155.sol";

contract ERC1155Mock is ERC1155 {
  constructor() {}

  function mint(uint256 id, uint256 amount) public virtual {
    _mint(msg.sender, id, amount, msg.data);
  }

  function burn() public virtual {}
}

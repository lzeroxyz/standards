// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../../access/Ownable.sol";

contract OwnableMock is Ownable {
  constructor() {}

  function ownedFunction() public view onlyOwner returns (bool) {
    return true;
  }

  function openFunction() public view notFromOwner returns (bool) {
    return true;
  }

  function transferOwnership(address newOwner) public onlyOwner {
    _transferOwnership(newOwner);
  }
}

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract ERC1155NonReceiverMock {
  string private _hello;

  constructor() {}

  function hello() public returns (string memory) {
    return _hello;
  }
}

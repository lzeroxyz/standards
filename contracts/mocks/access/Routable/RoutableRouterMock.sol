// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./RoutableMock.sol";

contract RoutableRouterMock {
  RoutableMock private _routableContract;

  constructor(RoutableMock routableContract) {
    _routableContract = routableContract;
  }

  function routedFunction() public view returns (bool) {
    return _routableContract.routedFunction();
  }

  function openFunction() public view returns (bool) {
    return _routableContract.openFunction();
  }
}

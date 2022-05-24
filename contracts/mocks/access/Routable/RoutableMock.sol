// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../../../access/Routable.sol";

contract RoutableMock is Routable {
  constructor(address router) Routable(router) {}

  function routedFunction() public view onlyRouter returns (bool) {
    return true;
  }

  function openFunction() public view notFromRouter returns (bool) {
    return true;
  }

  function transferRouter(address newRouter) public {
    _transferRouter(newRouter);
  }
}

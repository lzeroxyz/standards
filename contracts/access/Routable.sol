// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

/// @dev Contract module that allows inheritant contracts to implement routing system from another smart contract
contract Routable {
    /**
     * @dev Emitted when the router transfer is triggered
     * @param previousRouter The previous router address
     * @param newRouter The new router address
     */
    event RouterTransferred(
        address indexed previousRouter,
        address indexed newRouter
    );

    address private _router;

    /**
     * @dev Initializes the contract setting the router address
     */
    constructor(address router) {
        _router = router;

        emit RouterTransferred(address(0), router);
    }

    /**
     * @dev Returns the router address
     */
    function router() public view virtual returns (address) {
        return _router;
    }

    /**
     * @dev Throws if called by any contract other than the router.
     */
    modifier onlyRouter() {
        require(msg.sender == _router, "Routable: Caller is not the router");
        _;
    }

    /**
     * @dev Throws if called by the router contract.
     */
    modifier notFromRouter() {
        require(msg.sender != _router, "Routable: Caller is the router");
        _;
    }

    /**
     * @dev Change the router address
     */
    function _setRouter(address newRouter) internal virtual onlyRouter {
        require(
            newRouter.code.length > 0,
            "Routable: New router is not a contract"
        );

        address oldRouter = _router;

        _router = newRouter;

        emit RouterTransferred(oldRouter, newRouter);
    }
}

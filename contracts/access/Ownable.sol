// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/// @dev Contract module that allows inheritant contracts to implement ownership system
contract Ownable {
    /**
     * @dev Emitted when the owner transfer is triggered
     * @param previousOwner The previous owner address
     * @param newOwner The new owner address
     */
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    address private _owner;

    /**
     * @dev Initializes the contract setting the owner to the sender
     */
    constructor() {
        _owner = msg.sender;

        emit OwnershipTransferred(address(0), msg.sender);
    }

    /**
     * @dev Returns the router address
     */
    function owner() public view virtual returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if called by any user other than the owner.
     */
    modifier onlyOwner() virtual {
        require(msg.sender == _owner, "Ownable: Caller is not the owner");
        _;
    }

    /**
     * @dev Throws if called by the router contract.
     */
    modifier notFromOwner() virtual {
        require(msg.sender != _owner, "Ownable: Caller is the owner");
        _;
    }

    /**
     * @dev Transfers the ownership of the contract to a new address.
     */
    function _transferOwnership(address newOwner) internal virtual onlyOwner {
        require(
            newOwner != address(0),
            "Ownable: New owner is the zero address"
        );

        address oldOwner = _owner;

        _owner = newOwner;

        emit OwnershipTransferred(oldOwner, newOwner);
    }
}

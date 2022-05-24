import { expect } from 'chai';
import { create } from 'domain';
import { Contract, ContractFactory, ContractTransaction } from 'ethers';
import { ethers } from 'hardhat';
import { Ownable, OwnableMock } from '../types/contracts';
import { createUsers, users } from './utils';

let ownableContract: Contract & OwnableMock;

let ownableContractFactory: ContractFactory;

async function prepareContract() {
  ownableContractFactory = await ethers.getContractFactory('OwnableMock');
}

async function deployContract() {
  ownableContract = (await ownableContractFactory.deploy()) as Contract &
    OwnableMock;

  await ownableContract.deployed();
}

describe('Ownable', () => {
  beforeEach(async () => {
    await createUsers();

    await prepareContract();

    await deployContract();
  });

  describe('When the contract contructs', () => {
    it('Should set the initial contract owner', async () => {
      expect(await ownableContract.owner()).to.be.equal(users.deployer.address);
    });

    it('Should emit the OwnershipTransferred event', () => {
      expect(ownableContract.deployTransaction).to.emit(
        ownableContract,
        'OwnershipTransferred'
      );
    });
  });

  describe('owner', () => {
    it('Should return the contract owner', async () => {
      expect(await ownableContract.owner()).to.be.equal(users.deployer.address);
    });
  });

  describe('onlyOwner', () => {
    describe('When the caller is not the owner', () => {
      it('Should revert', () => {
        expect(
          ownableContract.connect(users.attacker.address).ownedFunction()
        ).to.be.revertedWith('Ownable: Caller is not the owner');
      });
    });

    describe('When the conditions are met', () => {
      it('Should pass the verification', async () => {
        expect(ownableContract.ownedFunction()).to.not.be.reverted;

        expect(await ownableContract.ownedFunction()).to.be.equal(true);
      });
    });
  });

  describe('notFromOwner', () => {
    describe('When the caller is the owner', () => {
      it('Should revert', () => {
        expect(ownableContract.openFunction()).to.be.revertedWith(
          'Ownable: Caller is the owner'
        );
      });
    });

    describe('When the conditions are met', () => {
      it('Should pass the verification', async () => {
        expect(ownableContract.connect(users.other1.address).openFunction()).to
          .not.be.reverted;

        expect(
          await ownableContract.connect(users.other1.address).openFunction()
        ).to.be.equal(true);
      });
    });
  });

  describe('_transferOwnership', () => {
    describe('When the newOwner is the zero address', () => {
      it('Should revert', () => {
        expect(
          ownableContract.transferOwnership(
            '0x0000000000000000000000000000000000000000'
          )
        ).to.be.revertedWith('Ownable: New owner is the zero address');
      });
    });

    describe('When the conditions are met', () => {
      let transferOwnershipTransaction: ContractTransaction;

      beforeEach(async () => {
        transferOwnershipTransaction = await ownableContract.transferOwnership(
          users.other1.address
        );
      });

      it('Should set the new owner', async () => {
        expect(await ownableContract.owner()).to.be.equal(users.other1.address);
      });

      it('Should emit the OwnershipTransferred event', () => {
        expect(transferOwnershipTransaction)
          .to.emit(ownableContract, 'OwnershipTransferred')
          .withArgs(users.deployer.address, users.other1.address);
      });
    });
  });
});

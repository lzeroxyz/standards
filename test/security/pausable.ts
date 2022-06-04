import { expect } from 'chai';
import { Contract, ContractFactory } from 'ethers';
import { ethers } from 'hardhat';
import { PausableMock } from '../../types/contracts';
import { createUsers, users } from '../utils';

let pausableContract: Contract & PausableMock;

let pausableContractFactory: ContractFactory;

async function prepareContract() {
  pausableContractFactory = await ethers.getContractFactory('PausableMock');
}

async function deployContract() {
  pausableContract = (await pausableContractFactory.deploy()) as Contract &
    PausableMock;

  await pausableContract.deployed();
}

describe('Pausable', () => {
  beforeEach(async () => {
    await createUsers();

    await prepareContract();

    await deployContract();
  });

  describe('When the contract contructs', () => {
    it('Should set the initial contract state', async () => {
      expect(await pausableContract.paused()).to.be.equal(false);
    });

    it('Should emit the OwnershipTransferred event', () => {
      expect(pausableContract.deployTransaction)
        .to.emit(pausableContract, 'OwnershipTransferred')
        .withArgs(
          '0x0000000000000000000000000000000000000000',
          users.other1.address
        );
    });
  });
});

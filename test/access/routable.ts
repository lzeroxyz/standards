import { expect } from 'chai';
import { Contract, ContractFactory, ContractTransaction } from 'ethers';
import { ethers } from 'hardhat';
import { computeDeploymentAddresses } from '../../helpers/contract-address';
import { Routable, RoutableRouterMock } from '../../types/contracts';
import { createUsers, users } from '../utils';

let contractAddresses: { [key: string]: string };

let routableContract: Contract & Routable,
  routableRouterContract: Contract & RoutableRouterMock;

let routableContractFactory: ContractFactory,
  routableRouterContractFactory: ContractFactory;

async function prepareContracts() {
  routableContractFactory = await ethers.getContractFactory('RoutableMock');
  routableRouterContractFactory = await ethers.getContractFactory(
    'RoutableRouterMock'
  );
}

async function deployContracts() {
  contractAddresses = await computeDeploymentAddresses(users.deployer.address, [
    'RoutableMock',
    'RoutableRouterMock',
  ]);

  routableContract = (await routableContractFactory.deploy(
    contractAddresses.RoutableRouterMock
  )) as Contract & Routable;
  routableRouterContract = (await routableRouterContractFactory.deploy(
    contractAddresses.RoutableMock
  )) as Contract & RoutableRouterMock;

  await routableContract.deployed();
  await routableRouterContract.deployed();
}
describe('Routable', () => {
  beforeEach(async () => {
    await createUsers();

    await prepareContracts();

    await deployContracts();
  });

  describe('When the contract contructs', () => {
    it('Should set the initial contract router', async () => {
      expect(await (await routableContract.router()).toLowerCase()).to.be.equal(
        contractAddresses.RoutableRouterMock
      );
    });

    it('Should emit the OwnershipTransferred event', () => {
      expect(routableContract.deployTransaction)
        .to.emit(routableContract, 'RouterTransferred')
        .withArgs(
          '0x0000000000000000000000000000000000000000',
          contractAddresses.RoutableRouterMock
        );
    });
  });

  describe('router', () => {
    it('Should return the contract router', async () => {
      expect(await routableContract.router()).to.be.hexEqual(
        contractAddresses.RoutableRouterMock
      );
    });
  });

  describe('onlyRouter', () => {
    describe('When the caller is not the router', () => {
      it('Should revert', () => {
        expect(routableContract.routedFunction()).to.be.revertedWith(
          'Routable: Caller is not the router'
        );
      });
    });

    describe('When the conditions are met', () => {
      it('Should pass the verification', async () => {
        expect(routableRouterContract.routedFunction()).to.not.be.reverted;

        expect(await routableRouterContract.routedFunction()).to.be.equal(true);
      });
    });
  });

  describe('notFromRouter', () => {
    describe('When the caller is the router', () => {
      it('Should revert', () => {
        expect(routableRouterContract.openFunction()).to.be.revertedWith(
          'Routable: Caller is the router'
        );
      });
    });

    describe('When the conditions are met', () => {
      it('Should pass the verification', async () => {
        expect(routableContract.openFunction()).to.not.be.reverted;

        expect(await routableContract.openFunction()).to.be.equal(true);
      });
    });
  });

  describe('_transferRouter', () => {
    describe('When the newRouter is the zero address', () => {
      it('Should revert', () => {
        expect(
          routableContract.transferRouter(
            '0x0000000000000000000000000000000000000000'
          )
        ).to.be.revertedWith('Routable: New router is the zero address');
      });
    });

    describe('When the newRouter is not a smart contract', () => {
      it('Should revert', () => {
        expect(
          routableContract.transferRouter(users.other1.address)
        ).to.be.revertedWith('Routable: New router is not a contract');
      });
    });

    describe('When the conditions are met', () => {
      let transferRouterTransaction: ContractTransaction;

      beforeEach(async () => {
        transferRouterTransaction = await routableContract.transferRouter(
          contractAddresses.RoutableRouterMock
        );
      });

      it('Should set the new router', async () => {
        expect((await routableContract.router()).toLowerCase()).to.be.equal(
          contractAddresses.RoutableRouterMock
        );
      });

      it('Should emit the RouterTransferred event', () => {
        expect(transferRouterTransaction)
          .to.emit(routableContract, 'OwnershipTransferred')
          .withArgs(
            contractAddresses.RoutableRouterMock,
            contractAddresses.RoutableRouterMock
          );
      });
    });
  });
});

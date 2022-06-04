import { expect } from 'chai';
import { BigNumber, Contract, ContractFactory } from 'ethers';
import { ethers } from 'hardhat';
import {
  ERC1155Mock,
  ERC1155NonReceiverMock,
  ERC1155ReceiverMock,
} from '../../types/contracts';
import { createUsers, users } from '../utils';

let erc1155Contract: Contract & ERC1155Mock;
let erc1155ReceiverContract: Contract & ERC1155ReceiverMock;
let erc1155NonReceiverContract: Contract & ERC1155NonReceiverMock;

let erc1155ContractFactory: ContractFactory;
let erc1155ReceiverContractFactory: ContractFactory;
let erc1155NonReceiverContractFactory: ContractFactory;

async function prepareContract() {
  erc1155ContractFactory = await ethers.getContractFactory('ERC1155Mock');

  erc1155ReceiverContractFactory = await ethers.getContractFactory(
    'ERC1155ReceiverMock'
  );

  erc1155NonReceiverContractFactory = await ethers.getContractFactory(
    'ERC1155NonReceiverMock'
  );
}

async function deployContract() {
  erc1155Contract = (await erc1155ContractFactory.deploy()) as Contract &
    ERC1155Mock;

  await erc1155Contract.deployed();

  erc1155ReceiverContract =
    (await erc1155ReceiverContractFactory.deploy()) as Contract &
      ERC1155ReceiverMock;

  await erc1155ReceiverContract.deployed();

  erc1155NonReceiverContract =
    (await erc1155NonReceiverContractFactory.deploy()) as Contract &
      ERC1155NonReceiverMock;

  await erc1155NonReceiverContract.deployed();
}

describe('ERC1155', () => {
  beforeEach(async () => {
    await createUsers();

    await prepareContract();

    await deployContract();
  });

  describe('balanceOf', () => {
    describe('When the owner is the zero address', () => {
      it('Should revert', () => {
        expect(
          erc1155Contract.balanceOf(ethers.constants.AddressZero, 1)
        ).to.be.revertedWith('ERC1155: Invalid address');
      });
    });

    describe('When the conditions are met', () => {
      beforeEach(async () => {
        await erc1155Contract.connect(users.client.signer).mint(1, 1);
      });

      it('Should return the balance of the user for the given token id', async () => {
        const balance = await erc1155Contract.balanceOf(
          users.client.address,
          1
        );
        expect(balance).to.be.equal(BigNumber.from(1));
      });
    });
  });

  describe('balanceOfBatch', () => {
    describe('When the owners and ids length mistmatch', () => {
      it('Should revert', () => {
        expect(
          erc1155Contract.balanceOfBatch(
            [users.client.address, users.client.address],
            [1]
          )
        ).to.be.revertedWith('ERC1155: Owners and amounts length mistmatch');
      });
    });

    describe('When the conditions are met', () => {
      beforeEach(async () => {
        await erc1155Contract.connect(users.client.signer).mint(1, 1);

        await erc1155Contract.connect(users.other1.signer).mint(2, 1);
      });

      it('Should return the balance of the users for the given tokens ids', async () => {
        const balances = await erc1155Contract.balanceOfBatch(
          [users.client.address, users.other1.address],
          [1, 2]
        );

        expect(balances).to.be.an('array');
        expect(balances).to.be.deep.equal([
          BigNumber.from(1),
          BigNumber.from(1),
        ]);
      });
    });
  });

  describe('setApprovalForAll', () => {});

  describe('safeTransferFrom', () => {
    beforeEach(async () => {
      await erc1155Contract.connect(users.client.signer).mint(1, 1);

      await erc1155Contract.connect(users.other1.signer).mint(2, 1);
    });

    describe('When the user is not the token owner or approved', () => {
      it('Should revert', async () => {
        await expect(
          erc1155Contract
            .connect(users.attacker.signer)
            .safeTransferFrom(
              users.client.address,
              users.other1.address,
              1,
              1,
              ethers.constants.HashZero
            )
        ).to.be.revertedWith('ERC1155: Caller is not authorized');
      });
    });

    describe('When the amount exceed the balance', () => {
      it('Should revert', async () => {
        await expect(
          erc1155Contract
            .connect(users.client.signer)
            .safeTransferFrom(
              users.client.address,
              users.other1.address,
              2,
              2,
              ethers.constants.HashZero
            )
        ).to.be.reverted;
      });
    });

    describe('When the recipient is not a contract', () => {
      describe('When the recipient is the zero address', () => {
        it('Should revert', async () => {
          await expect(
            erc1155Contract
              .connect(users.client.signer)
              .safeTransferFrom(
                users.client.address,
                ethers.constants.AddressZero,
                1,
                1,
                ethers.constants.HashZero
              )
          ).to.be.revertedWith('ERC1155: Unsafe recipient');
        });
      });

      describe('When the conditions are met', () => {
        it('Should transfer the tokens', async () => {
          await erc1155Contract
            .connect(users.client.signer)
            .safeTransferFrom(
              users.client.address,
              users.other1.address,
              1,
              1,
              ethers.constants.HashZero
            );

          const balance = await erc1155Contract.balanceOf(
            users.other1.address,
            1
          );
          expect(balance).to.be.equal(BigNumber.from(1));
        });

        it('Should emit a Transfer event', async () => {
          await expect(
            erc1155Contract
              .connect(users.client.signer)
              .safeTransferFrom(
                users.client.address,
                users.other1.address,
                1,
                1,
                ethers.constants.HashZero
              )
          ).to.emit(erc1155Contract, 'TransferSingle');
        });
      });
    });

    describe('When the recipient is a contract', () => {
      describe('When it does not implement the IERC1155Receiver interface', () => {
        it('Should revert', async () => {
          await expect(
            erc1155Contract
              .connect(users.client.signer)
              .safeTransferFrom(
                users.client.address,
                erc1155NonReceiverContract.address,
                1,
                1,
                ethers.constants.HashZero
              )
          ).to.be.reverted;
        });
      });

      describe('When the conditions are met', () => {
        it('Should transfer the tokens', async () => {
          await erc1155Contract
            .connect(users.client.signer)
            .safeTransferFrom(
              users.client.address,
              erc1155ReceiverContract.address,
              1,
              1,
              ethers.constants.HashZero
            );

          const balance = await erc1155Contract.balanceOf(
            users.client.address,
            1
          );
          expect(balance).to.be.equal(BigNumber.from(0));

          const balanceReceiver = await erc1155Contract.balanceOf(
            erc1155ReceiverContract.address,
            1
          );
          expect(balanceReceiver).to.be.equal(BigNumber.from(1));
        });

        it('Should emit a Transfer event', async () => {
          await expect(
            erc1155Contract
              .connect(users.client.signer)
              .safeTransferFrom(
                users.client.address,
                erc1155ReceiverContract.address,
                1,
                1,
                ethers.constants.HashZero
              )
          ).to.emit(erc1155Contract, 'TransferSingle');
        });
      });
    });
  });

  describe('safeBatchTransferFrom', () => {
    beforeEach(async () => {
      await erc1155Contract.connect(users.client.signer).mint(1, 1);

      await erc1155Contract.connect(users.client.signer).mint(2, 1);
    });

    describe('When the ids and amounts length mistmatch', () => {
      it('Should revert', async () => {
        await expect(
          erc1155Contract
            .connect(users.client.signer)
            .safeBatchTransferFrom(
              users.client.address,
              users.other1.address,
              [1],
              [1, 1],
              ethers.constants.HashZero
            )
        ).to.be.revertedWith('ERC1155: Ids and amounts length mistmatch');
      });
    });

    describe('When the user is not the token owner or approved', () => {
      it('Should revert', async () => {
        await expect(
          erc1155Contract
            .connect(users.attacker.signer)
            .safeBatchTransferFrom(
              users.client.address,
              users.other1.address,
              [1, 2],
              [1, 1],
              ethers.constants.HashZero
            )
        ).to.be.revertedWith('ERC1155: Caller is not authorized');
      });
    });

    describe('When one amount exceed the balance', () => {
      it('Should revert', async () => {
        await expect(
          erc1155Contract
            .connect(users.client.signer)
            .safeBatchTransferFrom(
              users.client.address,
              users.other1.address,
              [1, 2],
              [1, 2],
              ethers.constants.HashZero
            )
        ).to.be.reverted;
      });
    });

    describe('When the recipient is not a contract', () => {
      describe('When the recipient is the zero address', () => {
        it('Should revert', async () => {
          await expect(
            erc1155Contract
              .connect(users.client.signer)
              .safeBatchTransferFrom(
                users.client.address,
                ethers.constants.AddressZero,
                [1, 2],
                [1, 1],
                ethers.constants.HashZero
              )
          ).to.be.revertedWith('ERC1155: Unsafe recipient');
        });
      });

      describe('When the conditions are met', () => {
        it('Should transfer the tokens', async () => {
          await erc1155Contract
            .connect(users.client.signer)
            .safeBatchTransferFrom(
              users.client.address,
              users.other1.address,
              [1, 2],
              [1, 1],
              ethers.constants.HashZero
            );

          const firstTokenBalance = await erc1155Contract.balanceOf(
            users.other1.address,
            1
          );
          expect(firstTokenBalance).to.be.equal(BigNumber.from(1));
          const secondTokenBalance = await erc1155Contract.balanceOf(
            users.other1.address,
            2
          );
          expect(secondTokenBalance).to.be.equal(BigNumber.from(1));
        });

        it('Should emit a TransferBatch event', async () => {
          await expect(
            erc1155Contract
              .connect(users.client.signer)
              .safeBatchTransferFrom(
                users.client.address,
                users.other1.address,
                [1, 2],
                [1, 1],
                ethers.constants.HashZero
              )
          ).to.emit(erc1155Contract, 'TransferBatch');
        });
      });
    });

    describe('When the recipient is a contract', () => {
      describe('When it does not implement the IERC1155Receiver interface', () => {
        it('Should revert', async () => {
          await expect(
            erc1155Contract
              .connect(users.client.signer)
              .safeBatchTransferFrom(
                users.client.address,
                erc1155NonReceiverContract.address,
                [1, 2],
                [1, 1],
                ethers.constants.HashZero
              )
          ).to.be.reverted;
        });
      });

      describe('When the conditions are met', () => {
        it('Should transfer the tokens', async () => {
          await erc1155Contract
            .connect(users.client.signer)
            .safeBatchTransferFrom(
              users.client.address,
              erc1155ReceiverContract.address,
              [1, 2],
              [1, 1],
              ethers.constants.HashZero
            );

          const token1ClientBalance = await erc1155Contract.balanceOf(
            users.client.address,
            1
          );
          const token2ClientBalance = await erc1155Contract.balanceOf(
            users.client.address,
            2
          );

          expect(token1ClientBalance).to.be.equal(BigNumber.from(0));
          expect(token2ClientBalance).to.be.equal(BigNumber.from(0));

          const token1BalanceReceiver = await erc1155Contract.balanceOf(
            erc1155ReceiverContract.address,
            1
          );
          const token2BalanceReceiver = await erc1155Contract.balanceOf(
            erc1155ReceiverContract.address,
            2
          );
          expect(token1BalanceReceiver).to.be.equal(BigNumber.from(1));
          expect(token2BalanceReceiver).to.be.equal(BigNumber.from(1));
        });

        it('Should emit a Transfer event', async () => {
          await expect(
            erc1155Contract
              .connect(users.client.signer)
              .safeBatchTransferFrom(
                users.client.address,
                erc1155ReceiverContract.address,
                [1, 2],
                [1, 1],
                ethers.constants.HashZero
              )
          ).to.emit(erc1155Contract, 'TransferBatch');
        });
      });
    });
  });
});

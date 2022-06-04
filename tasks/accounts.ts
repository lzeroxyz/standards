// @ts-nocheck

import { task } from 'hardhat/config';

task('accounts', 'Prints the accounts').setAction(async () => {
  const accounts = await hre.ethers.getSigners();

  accounts.forEach((account) => console.log(account));
});

module.exports = {};

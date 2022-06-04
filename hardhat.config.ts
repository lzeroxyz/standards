require('dotenv').config();

import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import { HardhatUserConfig } from 'hardhat/config';
import 'solidity-coverage';
import './tasks/accounts';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    hardhat: {},
  },
  typechain: {
    outDir: 'types/contracts',
    target: 'ethers-v5',
    alwaysGenerateOverloads: true,
    externalArtifacts: ['externalArtifacts/*.json'],
  },
};

export default config;

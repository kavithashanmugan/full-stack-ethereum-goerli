require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const { ALCHEMY_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url:ALCHEMY_URL ,
      accounts: ['0x35feae806568e9db10e15b0a13f70056ca6b828d9142afd824908998584f7a7a']
    }
  }
};

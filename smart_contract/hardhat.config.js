require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/BS1UmdPCghXN3rr3WK6nGboGRShWc5s5",
      accounts: ["7c6c0852281bf07c157f2ea79523f33b6533536829b52717ce876eb95eb5ecf6"]
    }
  }
};

//https://eth-mainnet.g.alchemy.com/v2/gjMdOD0AaS_70XRTjV9NPn0y0dph3jpE

require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/1WZ-xPD6p2INZVGjUF35LErp5v6nbsV1',
      accounts: ['0bca93c02007b340546d35773497fa308e75c9bbae8644353d2d593690ae60f3'],
    },
  },
};

require("@nomiclabs/hardhat-waffle");
const projectId = "4fa55521d0f647f28c1a179e85f454da"
const privateKey = '59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d'
module.exports = {
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {
			chainId: 1337
		},
		mumbai: {
			url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
			accounts: [privateKey]
		  }, 
		  mainnet: {
			url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
			accounts: [privateKey]
		  },
	},
	solidity: {
		version: "0.8.4",
		settings: {
			optimizer: {
				enabled: true,
				runs: 200
			}
		}
	}
};

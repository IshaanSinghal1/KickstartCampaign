const HDWalletProvider = require("@truffle/hdwallet-provider");

const Web3 = require("web3");

const mnemonicPhrase =
  "category jewel have sugar distance disagree ski mass shoulder deliver lawn treat";

const compiledGenerator = require("../ethereum/build/CampaignGenerator.json");

let provider = new HDWalletProvider({
  mnemonic: {
    phrase: mnemonicPhrase,
  },
  providerOrUrl:
    "wss://rinkeby.infura.io/ws/v3/e8ed1344abe1488c9eebe149c7e99879",
});

const web3 = new Web3(provider);
 
const deploy = async () => {
  const accounts = await new web3.eth.getAccounts();
  console.log("Attempting to deploy contract from ", accounts[0]);
  const result = await new web3.eth.Contract(
    JSON.parse(compiledGenerator.interface)
  )
    .deploy({ data: compiledGenerator.bytecode })
    .send({ from: accounts[0], gas: "1000000" });
  console.log("Contract deployed to ", result.options.address);
};
deploy();

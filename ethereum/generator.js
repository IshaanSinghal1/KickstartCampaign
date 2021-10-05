import web3 from "./web3";
import CampaignGenarator from "./build/CampaignGenerator.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignGenarator.interface),
  "0x55C4A257Af18d8Afe97a150A0f2baf483E7a3157"
);

export default instance;
import Web3 from 'web3';

let web3;
const web3Instance=async()=>{
    if (typeof window!=='undefined'&& typeof window.ethereum!=='undefined') {
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    } else if (typeof window!=='undefined'&& typeof window.web3!=='undefined') {
        web3 = new Web3(window.web3.currentProvider);
    } else {
        const provider=new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/e8ed1344abe1488c9eebe149c7e99879');
        web3=new Web3(provider);
    };
}
web3Instance();

export default web3;
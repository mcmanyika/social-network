import Web3 from 'web3';
 
let web3;
 
const ethEnabled = () => {
    if (typeof window !== 'undefined'){
        if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        web3 = window.web3
        return true;
        }
        return false;
    } else {
        const provider = new Web3.providers.HttpProvider(
            'https://rinkeby.infura.io/v3/16697f3c94754b18828da39e491a4ad1'
            );
        web3 = new Web3(provider);
    }
}
ethEnabled()
 
export default web3;

const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3, eth } = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
        'fever forum music detail say talk live fault sustain inform uphold agent',
        'https://sepolia.infura.io/v3/69546a42cd674ae3bc5abe981e86928e'
);

const web3 = new Web3(provider);

const deploy = async ()=> {
        const accounts = await web3.eth.getAccounts();
        console.log('attempting to deploy from this account', accounts[0]);
        const result =  await new web3.eth.Contract(JSON.parse(interface))
                .deploy({data: bytecode, arguments: ['hi there']})
                .send({gas: 1000000, from: accounts[0]});
        console.log('contract deployed to ', result.options.address);
        provider.engine.stop;
};
deploy();
require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera foot chef return stick mistake junior light army giggle'; 
let testAccounts = [
"0x6fd362ddb27232770b7f95716da1c90310db5b93d90f37794500e4ba5f3378af",
"0x9e968915e34889efefbac0753e290d7b93e53c4828d504401088bbd5d009927f",
"0xd47e90af4dc14b8ac2c39a05afded4d056ef0dc513f9c8fbbbb8d14b2fc3fdb2",
"0xdaef492364a98b300e9864fbab9c5a2797d727bf32c9c0bf3316598a56c9f3be",
"0x55700ddd2bbfa6879c318e33242c441868806e47223f71ef1643a8d374dfb6ac",
"0x24330e08fceb9c9c5040e1517d9562ecdaed24e32030ca72d542f1ef1966f631",
"0x0244fa621c5868d22e21e88b8e5176ff267cf34236498f8899781067e3a4e555",
"0x74b53bc5138a75f861b71cc8f58600a5268cdce4c3794745820a50c85c3bb9c4",
"0xe091afd258a0af9da164e7cc5ade6c0c0d153e5e9ce702a97aa139a78678e980",
"0x9dee1dc3b6ba5e1bf1f3c8a9bf38b0abed2e41e286d5230a5ba877fbb72ab8c3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


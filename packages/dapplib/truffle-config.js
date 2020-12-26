require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note soccer upgrade good kitten bridge gas'; 
let testAccounts = [
"0x85d5b544ea7bdbf1aad44fb956a095f6ca2c2ce497883bb3ee7bb7cd1756d87a",
"0xc49cc69d8748ab75c556ab60a8a9c058962fc6e2f5bad8d066f3a781a82e3873",
"0x9c60c10d473260d4dd13ad5ebf755d9775e5a852024891b82132f42e73004f59",
"0xb1bf10f6ab9181764ce3c1a612a8a055263fc69363f83adeedd011ce3b968b2f",
"0x8d70b9e8c92cd2d7b029711f502ea453f628aca90e225df002ad0e118e8712b8",
"0xf6a1a9e762f29625b39690eb63553c9ec25f90714915fa4ebfcbe88ca79dbaae",
"0x13f654f02d797706eb427894090d05ee8c99d6b5cab6d79090ab16479f182549",
"0x33a9dd190f5e8f9faef0922fce8201705753e515faca75f764357da2220fe6a3",
"0x72c2d0bc1a77d4450994679075e486636e4cb11641e828bd8e60103ad25a5861",
"0xcfb2caa952d2a4396eb27845530fe859c3eb8ac2e661da772497eb342b0ce571"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

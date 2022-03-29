
const { get_pair_address } = require("./UniswapV2");
const { get_pool_address, get_tokens_reserves } = require("./UniswapV3");

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const Web3 = require('Web3');
const web3 = new Web3(process.env.INFURA_URL);


const weth = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const yearn = "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e";

async function main() {
    try {
        const pair = await get_pool_address(web3, weth, yearn, 3000);
        console.log(`Pair address: ${pair}`);
        const reserves = await get_tokens_reserves(web3, pair, weth, yearn);
        console.log("Reserves: ");
        console.log(reserves);
    } catch (e) {
        console.log("Error at: main()");
    }

    
}

main();








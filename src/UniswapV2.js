const { ChainId, Fetcher } = require('@uniswap/sdk');



async function get_pair_address(a_address, b_address) {
    try {
        const chainId = ChainId.MAINNET;

        const a = await Fetcher.fetchTokenData(chainId, a_address);
        const b = await Fetcher.fetchTokenData(chainId, b_address);

        return await Fetcher.fetchPairData(a, b);
    } catch (e) {
        console.log("Error at: get_pair_address()");
    }
}


module.exports = {
    get_pair_address: get_pair_address
};
function amount_In_filter(web3, n, decimals) {  
    if ( (2 < decimals) & (decimals < 19) ) {
        if (parseInt(decimals) == 3) {
            return web3.utils.toWei(n.toString(), "kwei");
        }
        if (parseInt(decimals) == 4) {
            return web3.utils.toWei(n.toString(), "mwei")/100;
        }
        if (parseInt(decimals) == 5) {
            return web3.utils.toWei(n.toString(), "mwei")/10;
        }
        if (parseInt(decimals) == 6) {
            return web3.utils.toWei(n.toString(), "mwei");
        }
        if (parseInt(decimals) == 7) {
            return web3.utils.toWei(n.toString(), 'gwei')/100;
        }
        if (parseInt(decimals) == 8) {
            return web3.utils.toWei(n.toString(), 'gwei')/10;
        }
        if (parseInt(decimals) == 9) {
            return web3.utils.toWei(n.toString(), 'gwei');
        }
        if (parseInt(decimals) == 10) {
            return web3.utils.toWei(n.toString(), "microether")/100;
        }
        if (parseInt(decimals) == 11) {
            return web3.utils.toWei(n.toString(), "microether")/10;
        }
        if (parseInt(decimals) == 12) {
            return web3.utils.toWei(n.toString(), "microether");
        }
        if (parseInt(decimals) == 13) {
            return web3.utils.toWei(n.toString(), "ether")/100000;
        }
        if (parseInt(decimals) == 14) {
            return web3.utils.toWei(n.toString(), "ether")/10000;
        }
        if (parseInt(decimals) == 15) {
            return web3.utils.toWei(n.toString(), "ether")/1000;
        }
        if (parseInt(decimals) == 16) {
            return web3.utils.toWei(n.toString(), "ether")/100;
        }
        if (parseInt(decimals) == 17) {
            return web3.utils.toWei(n.toString(), "ether")/10;
        }
        if (parseInt(decimals) == 18) {
            return web3.utils.toWei(n.toString(), "ether");
        }
    }   else {
        return "0";
    }                
}

function amount_Out_filter(web3, n, decimals) {  
    if ( (2 < decimals) & (decimals < 19) ) {
        if (parseInt(decimals) == 3) {
            return web3.utils.fromWei(n.toString(), "kwei");
        }
        if (parseInt(decimals) == 4) {
            return (web3.utils.fromWei(n.toString(), "mwei")*100).toFixed(4);
        }
        if (parseInt(decimals) == 5) {
            return (web3.utils.fromWei(n.toString(), "mwei")*10).toFixed(5);
        }
        if (parseInt(decimals) == 6) {
            return web3.utils.fromWei(n.toString(), "mwei");
        }
        if (parseInt(decimals) == 7) {
            return (web3.utils.fromWei(n.toString(), 'gwei')*100).toFixed(7);
        }
        if (parseInt(decimals) == 8) {
            return (web3.utils.fromWei(n.toString(), 'gwei')*10).toFixed(8);
        }
        if (parseInt(decimals) == 9) {
            return web3.utils.fromWei(n.toString(), 'gwei');
        }
        if (parseInt(decimals) == 10) {
            return (web3.utils.fromWei(n.toString(), "microether")*100).toFixed(10);
        }
        if (parseInt(decimals) == 11) {
            return (web3.utils.fromWei(n.toString(), "microether")*10).toFixed(11);
        }
        if (parseInt(decimals) == 12) {
            return web3.utils.fromWei(n.toString(), "microether");
        }
        if (parseInt(decimals) == 13) {
            return (web3.utils.fromWei(n.toString(), "ether")*100000).toFixed(13);
        }
        if (parseInt(decimals) == 14) {
            return (web3.utils.fromWei(n.toString(), "ether")*10000).toFixed(14);
        }
        if (parseInt(decimals) == 15) {
            return (web3.utils.fromWei(n.toString(), "ether")*1000).toFixed(15);
        }
        if (parseInt(decimals) == 16) {
            return (web3.utils.fromWei(n.toString(), "ether")*100).toFixed(16);
        }
        if (parseInt(decimals) == 17) {
            return (web3.utils.fromWei(n.toString(), "ether")*10).toFixed(17);
        }
        if (parseInt(decimals) == 18) {
            return web3.utils.fromWei(n.toString(), "ether");
        }
    }   else {
        return "0";
    }                 // *  FROM
}

module.exports = {  
    amount_Out_filter: amount_Out_filter, 
    amount_In_filter: amount_In_filter
};
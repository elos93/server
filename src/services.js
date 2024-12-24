const axios = require('axios');
const cache = require('./cache');

const API_URL = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range';

const getBitcoinData = async (startDate, endDate) => {
    const cacheKey = `${startDate}-${endDate}`;
    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }

    const startTimestamp = new Date(startDate).getTime() / 1000;
    const endTimestamp = new Date(endDate).getTime() / 1000;

    const response = await axios.get(`${API_URL}`, {
        params: {
            vs_currency: 'usd',
            from: startTimestamp,
            to: endTimestamp,
        },
    });

    const data = response.data.prices.map(([timestamp, value]) => ({
        date: new Date(timestamp).toISOString().split('T')[0],
        value,
    }));

    cache.set(cacheKey, data);
    return data;
};

module.exports = { getBitcoinData };

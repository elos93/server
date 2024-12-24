const cache = new Map();

const set = (key, value) => {
    cache.set(key, value);
    setTimeout(() => cache.delete(key), 3600000); // Expire cache in 1 hour
};

const get = (key) => cache.get(key);
const has = (key) => cache.has(key);

module.exports = { set, get, has };

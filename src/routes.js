const express = require('express');
const { getBitcoinData } = require('./services');
const router = express.Router();

router.get('/bitcoin', async (req, res) => {
    const { date, startDate, endDate } = req.query;

    try {
        if (date) {
            const data = await getBitcoinData(date);
            return res.json({ date, value: data });
        }
        if (startDate && endDate) {
            const data = await getBitcoinData(startDate, endDate);
            return res.json(data);
        }
        res.status(400).json({ error: 'Please provide a valid date or date range.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

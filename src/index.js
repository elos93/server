const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// הגדרת CORS לכל המקורות
app.use(cors({
    origin: '*',  // אפשר לכל מקור לגשת
    methods: ['GET', 'POST'],  // אפשר שיטות GET ו-POST
    allowedHeaders: ['Content-Type']  // רשימה של כותרות מותרות
}));

// נתיב לדוגמה
app.get('/api/bitcoin', (req, res) => {
    const { startDate, endDate } = req.query;
    
    // כאן תוכל לקרוא ל-API חיצוני כדי להחזיר נתונים אמיתיים
    const data = [
        { date: '2024-01-01', value: 30000 },
        { date: '2024-01-02', value: 31000 },
    ];
    
    // אם יש תאריכים, החזר נתונים תואמים לתאריכים
    const filteredData = data.filter(item => {
        const date = new Date(item.date);
        const start = new Date(startDate);
        const end = new Date(endDate);
        return date >= start && date <= end;
    });
    
    res.json(filteredData);
});

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

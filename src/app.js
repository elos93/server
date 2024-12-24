const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

// הפעלת CORS
app.use(cors()); // זה יאפשר לכל דומיין לגשת ל-API

// אם אתה רוצה להגביל דומיינים מסוימים, אתה יכול להשתמש בזה במקום:
// app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];
    const numbers = data.filter(x => !isNaN(x));
    const alphabets = data.filter(x => isNaN(x));
    const highest_alphabet = alphabets.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))[0] || "";

    res.json({
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highest_alphabet ? [highest_alphabet] : []
    });
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

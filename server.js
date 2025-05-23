const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public')); // Serve HTML from 'public' folder

app.listen(PORT, () => {
    console.log(`Server running!`);
});

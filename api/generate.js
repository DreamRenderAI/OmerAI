const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { prompt, style } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const formattedPrompt = encodeURIComponent(
            `${prompt.replace(/\s+/g, '_')}_${style.toLowerCase()}_digital_art`
        );
        const imageUrl = `${process.env.DemoTry}/${formattedPrompt}`;

        res.json({ imageUrl });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Failed to generate image' });
    }
};

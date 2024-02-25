// /api/proxy.js

import fetch from 'node-fetch';

export default async (req, res) => {

  const url = 'https://databit.online/api?token=3eaf82ca-0a30-4f14-8313-937c8b26a0f1&type=cpftype&query=39157460884';

  // In your /api/proxy.js
  try {
    const apiResponse = await fetch(url);
    const text = await apiResponse.text(); // Get the response text
    console.log('picles'); // Log it to see what's actually returned
    const data = JSON.parse(text); // Parse it as JSON if it's JSON
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching data' });
  }

};

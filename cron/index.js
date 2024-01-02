//const cron = require('node-cron');
const axios = require('axios')

// // Function to be executed
// const task = () => {
//   const date = new Date()
//   console.log(`Running cron job...${date}`);
//   // Your functionality here
// };

// // Schedule the first job at 9 AM
// cron.schedule('* * * * *', task); // Runs at 9:00 AM

// // Schedule the second job at 9:05 AM
// cron.schedule('5 9 * * *', task); // Runs at 9:05 AM

// API endpoint
const apiUrl = 'https://gold-price-qhwd.onrender.com/api/scraper/scrape'; // Replace with your API endpoint

// Function to fetch data from the API
const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl);
    console.log('API Response:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

// Call the function to fetch data
fetchData();

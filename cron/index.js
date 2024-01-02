const cron = require('node-cron');

// Function to be executed
const task = () => {
  const date = new Date()
  console.log(`Running cron job...${date}`);
  // Your functionality here
};

// Schedule the first job at 9 AM
cron.schedule('* * * * *', task); // Runs at 9:00 AM

// Schedule the second job at 9:05 AM
cron.schedule('5 9 * * *', task); // Runs at 9:05 AM

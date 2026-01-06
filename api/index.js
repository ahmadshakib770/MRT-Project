// Vercel serverless function entry point
const app = require('../server/index');

// Export the Express app as a Vercel serverless function
module.exports = app;

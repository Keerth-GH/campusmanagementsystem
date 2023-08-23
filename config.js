module.exports = {
    // Express server configuration
    port: process.env.PORT || 3000,
  
    // Database configuration
    dbConnectionString: process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/campus_management',
  
    // Other configurations if needed
  };
  
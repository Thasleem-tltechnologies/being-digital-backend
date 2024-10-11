// dbConnection.js
import sql from 'mssql';

// Database configuration
const config = {
  user: 'db_aa5acd_beingdigital_admin',
  password: 'Sangi@2024',
  server: 'SQL9001.site4now.net', 
  database: 'db_aa5acd_beingdigital',
  options: {
    encrypt: true, 
    trustServerCertificate: false,
  },
};

// Create a function to connect to the database
export const connectToDatabase = async () => {
  try {
    await sql.connect(config);
    console.log('Connected to the database.');
  } catch (err) {
    console.error('Database connection failed:', err);
    throw err; // Rethrow error for handling in calling function
  }
};

export default sql;

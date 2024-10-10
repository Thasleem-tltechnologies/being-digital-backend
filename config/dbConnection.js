import mysql from 'mysql2';

// Create a connection to the database
const connection = mysql.createConnection({
  host: '127.0.0.7',     // Replace with your database host
  user: 'root', // Replace with your database username
  password: '789800', // Replace with your database password
  database: 'bd_backend', // Replace with your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to the database.');
});

export default connection;

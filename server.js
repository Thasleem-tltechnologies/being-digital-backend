// server.js
import express, { json } from "express";
import { connectToDatabase } from './config/dbConnection.js'; // Import the connection function
import { submitEnquiry } from './controllers/enquiryController.js';

const app = express();
app.use(json());

app.post('/enquiry', submitEnquiry);

// Start the server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectToDatabase(); // Connect to the database before starting the server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Failed to start the server:', err);
  }
};

startServer();

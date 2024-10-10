import express, { json } from "express";
const app = express();
import { submitEnquiry } from './controllers/enquiryController.js';
// Middleware to parse incoming JSON requests
app.use(json());

app.post('/enquiry', submitEnquiry);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

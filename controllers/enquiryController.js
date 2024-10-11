// enquiryController.js
import sql, { connectToDatabase } from '../config/dbConnection.js';

// Enquiry submission controller function
export const submitEnquiry = async (req, res) => {
  const { name, email, phone, location, businessModel, products, services, message } = req.body;

  // Prepare the SQL query to insert the data
  const query = `
    INSERT INTO enquiries (name, email, phone, location, businessModel, products, services, message) 
    VALUES (@name, @email, @phone, @location, @businessModel, @products, @services, @message)
  `;

  try {
    await connectToDatabase(); // Ensure connection is established

    // Create a request object
    const request = new sql.Request();
    // Set parameters
    request.input('name', sql.VarChar, name);
    request.input('email', sql.VarChar, email);
    request.input('phone', sql.VarChar, phone);
    request.input('location', sql.VarChar, location);
    request.input('businessModel', sql.VarChar, businessModel);
    request.input('products', sql.VarChar, products);
    request.input('services', sql.VarChar, services);
    request.input('message', sql.VarChar, message);

    // Execute the query
    const result = await request.query(query);
    
    console.log('Enquiry submitted successfully:', result);
    res.status(200).json({ message: 'Enquiry received successfully!' });
  } catch (err) {
    console.error('Error inserting data:', err);
    res.status(500).json({ message: 'Failed to submit enquiry.' });
  }
};

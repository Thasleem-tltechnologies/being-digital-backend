import connection from '../config/dbConnection.js';

// Enquiry submission controller function
export const submitEnquiry = (req, res) => {
  const { name, email, phone, location, businessModel, products, services, message } = req.body;

  // Prepare the SQL query to insert the data
  const query = 'INSERT INTO enquiries (name, email, phone, location, businessModel, products, services, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

  // Insert the data into the database
  connection.query(query, [name, email, phone, location, businessModel, products, services, message], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ message: 'Failed to submit enquiry.' });
    }
    
    console.log('Enquiry submitted successfully:', results);
    res.status(200).json({ message: 'Enquiry received successfully!' });
  });
};

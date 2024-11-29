require('dotenv').config(); // Load environment variables from .env
const sgMail = require('@sendgrid/mail'); // SendGrid library
const express = require('express'); // Express for API handling

const app = express();
const port = 3000;


// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware to parse JSON requests
app.use(express.json());

// API endpoint to send email
app.post('/send_email', async (req, res) => {
    const { first_name, last_name, email, details, number} = req.body;

    const msg = {
        to: 'mindible.co.uk@gmail.com',
        from: 'janeiro.meosa@mindible.co.uk', // Replace with your verified email
        subject: `Please contact ${first_name}`,
        text: `Name: ${first_name} ${last_name}\nEmail: ${email}\nDetails: ${details}\nPhone: ${number}`
    };

    try {
        await sgMail.send(msg);
        res.status(200).send({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to send email' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

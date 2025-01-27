import dotenv from "dotenv";
import express from "express";
import sgMail from "@sendgrid/mail";

dotenv.config(); // Load environment variables from .env
const app = express();
const port = 3000;

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware to parse JSON requests
app.use(express.json());

// API endpoint to send email
app.post("/send_email", async (req, res) => {
    const { name, email, details, number } = req.body;

    const msg = {
        to: "mindible.co.uk@gmail.com",
        from: "janeiro.meosa@mindible.co.uk", // Replace with your verified email
        subject: `Please contact ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nDetails: ${details}\nPhone: ${number}`,
    };

    try {
        await sgMail.send(msg);
        res.status(200).send({ message: "Email sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to send email" });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

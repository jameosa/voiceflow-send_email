# voiceflow-send_email
This is a script created in Node.js that allows the user (customer) to submit their details in voiceflow and subsequently an email is sent to a person of your choising specified in the script e.g. ( to: 'mindible.co.uk@gmail.com',). This script had to be written because voiceflow does not have any SMTP functionality within the platfrom.

Step 1 - Please create an account with SendGrid - https://app.sendgrid.com/
Step 2 - Verify the Sender email - https://app.sendgrid.com/settings/sender_auth
Step 3 - Pull repo and make changes to e.g. (from:  from: 'janeiro.meosa@mindible.co.uk', // Replace with your verified email). Make sure the from email matches the verified email in Sendgrid
   const msg = {
        to: 'mindible.co.uk@gmail.com',
        from: 'janeiro.meosa@mindible.co.uk', // Replace with your verified email
        subject: `Please contact ${first_name}`,
        text: `Name: ${first_name} ${last_name}\nEmail: ${email}\nDetails: ${details}\nPhone: ${number}`
    };
Step 4 - Create variables in Voiceflow that matches the variables in your script.
Step 5 - Deploy Voiceflow chatbot on website.

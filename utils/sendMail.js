const nodemailer = require("nodemailer");


const sendMail = async (ip, reason) => {
    // Configure the email transporter
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // Google SMTP Server
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_ID,     // Your Gmail Address
            pass: process.env.PASSWORD,     // Password of Gmail Address
        }
    })

    try {
        // Send an alert with IP address and reason
        const info = await transporter.sendMail({
            from: process.env.EMAIL_ID, // Email ID of Sender
            to: process.env.EMAIL_ID, // Email IDs of receiver 
            subject: "Alert: Requests exceeded threshold limit.",
            text: `IP Address: ${ip}\nReason: ${reason}\n`,

        });

        console.log("Mail sent successfully to: ", info.messageId);
    }
    catch (error) {
        console.error("Error sending mail: ", error)
    }

}

module.exports = sendMail;
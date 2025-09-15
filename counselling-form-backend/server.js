import express from "express";
import cors from "cors";
import multer from "multer";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // load .env variables

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// You can leave this in case you want to add file uploads later
const upload = multer({ dest: "uploads/", limits: { files: 10 } });

app.post("/submit-form", upload.none(), async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      city,
      year_of_passing,
      qualification,
      ielts,
      country,
      budget,
      message
    } = req.body;

    console.log("✅ Form Submission Received:");
    console.log({
      name,
      email,
      phone,
      city,
      year_of_passing,
      qualification,
      ielts,
      country,
      budget,
      message
    });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: "🎓 New Student Profile Evaluation Submission",
      text: `
A new profile evaluation request has been submitted:

👤 Name: ${name}
📧 Email: ${email}
📱 Phone / WhatsApp: ${phone}
🏙️ City: ${city}
🎓 Qualification: ${qualification}
🎓 Year of Passing: ${year_of_passing}
📝 IELTS / PTE Score: ${ielts}
🌍 Preferred Country: ${country}
💰 Budget (PKR): ${budget}

📝 Message:
${message}

-- End of Submission --
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Form submitted successfully and email sent!",
    });
  } catch (err) {
    console.error("❌ Error sending email:", err);
    res.status(500).json({
      success: false,
      message: "Server error, email not sent.",
    });
  }
});

app.listen(4000, () => {
  console.log("🚀 Server running at http://localhost:4000");
});

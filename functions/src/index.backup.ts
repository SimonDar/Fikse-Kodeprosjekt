import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as sgMail from '@sendgrid/mail';
import * as cors from "cors";



admin.initializeApp();
sgMail.setApiKey(functions.config().sendgrid.key);

const corsHandler = cors({ origin: true });

interface SendContactEmailData {
  email: string;
  name: string;
  message: string; 
}

export const sendContactEmail = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    const data: SendContactEmailData = req.body;

    const msg = {
      to: data.email, // Recipient's email
      from: 'fikse@dargahi.no', // Your verified sender email
      subject: 'Confirmation: We received your message',
      text: `Hello ${data.name},\n\nThank you for contacting us. We received your message:\n\n"${data.message}"\n\nWe will get back to you shortly.\n\nBest regards,\nYour Company Name`,
      html: `<p>Hello ${data.name},</p><p>Thank you for contacting us. We received your message:</p><blockquote>"${data.message}"</blockquote><p>We will get back to you shortly.</p><p>Best regards,<br>Your Company Name</p>`,
    };

    try {
      await sgMail.send(msg);
      return res.status(200).send({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      const errorMessage = typeof error === 'string' ? error : (error instanceof Error ? error.message : JSON.stringify(error));
      return res.status(500).send({ success: false, error: errorMessage });
    }
  });
});

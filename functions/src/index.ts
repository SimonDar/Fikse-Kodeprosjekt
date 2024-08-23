import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as sgMail from '@sendgrid/mail';

admin.initializeApp();
sgMail.setApiKey(functions.config().sendgrid.key);

interface SendContactEmailData {
  email: string;
  name: string;
  message: string;
}

export const sendContactEmail = functions.https.onCall(async (data: SendContactEmailData, context) => {
  const msg = {
    to: data.email, // Recipient's email
    from: 'borohone@gmail.com', // Your verified sender email
    subject: 'Confirmation: We received your message',
    text: `Hello ${data.name},\n\nThank you for contacting us. We received your message:\n\n"${data.message}"\n\nWe will get back to you shortly.\n\nBest regards,\nYour Company Name`,
    html: `<p>Hello ${data.name},</p><p>Thank you for contacting us. We received your message:</p><blockquote>"${data.message}"</blockquote><p>We will get back to you shortly.</p><p>Best regards,<br>Your Company Name</p>`,
  };


  
    await sgMail.send(msg);
    return { success: true };
});

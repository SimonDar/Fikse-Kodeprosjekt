import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as sgMail from '@sendgrid/mail';

admin.initializeApp();

// Set your SendGrid API Key
sgMail.setApiKey('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');

export const sendEmailOnNewReparasjon = functions.firestore
  .document('reparasjon/{docId}')
  .onCreate(async (snap, context) => {
    const newValue = snap.data();
    const uid = newValue.UID;

    try {
      // Retrieve the user email based on UID
      const userRecord = await admin.auth().getUser(uid);
      const userEmail = userRecord.email;

      if (!userEmail) {
        console.error(`No email found for UID: ${uid}`);
        return;
      }

      // Construct email content
      const msg = {
        to: userEmail,  // Set recipient's email dynamically
        from: 'fikse@dargahi.no',  // Change to your verified sender
        subject: 'New Reparasjon Added',
        text: `A new reparasjon has been added with the following details:\nUID: ${newValue.UID}\nStatus: ${newValue.status}\nTime: ${newValue.time}\nType: ${newValue.type}`,
        html: `<strong>A new reparasjon has been added:</strong><br>UID: ${newValue.UID}<br>Status: ${newValue.status}<br>Time: ${newValue.time}<br>Type: ${newValue.type}`
      };

      // Send the email
      await sgMail.send(msg);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  });

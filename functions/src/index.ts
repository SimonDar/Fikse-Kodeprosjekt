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
    const docId = context.params.docId;
    const uid = newValue.UID;

    try {
      // Retrieve the user email based on UID
      const userRecord = await admin.auth().getUser(uid);
      const userEmail = userRecord.email;
      const userName = userRecord.displayName || 'kunde';

      if (!userEmail) {
        console.error(`No email found for UID: ${uid}`);
        return;
      }

      // Convert timestamp to a readable format
      const timestamp = newValue.time.toDate();  // Convert Firebase timestamp to JS Date
      const formattedDate = timestamp.toLocaleDateString('no-NO', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      const formattedTime = timestamp.toLocaleTimeString('no-NO', {
        hour: '2-digit',
        minute: '2-digit',
      });

      // Construct email content
      const msg = {
        to: userEmail,  // Set recipient's email dynamically
        from: 'fikse@dargahi.no',  // Change to your verified sender
        subject: 'Bekreftelse på din reparasjonsbestilling',
        text: `Hei ${userName},\n\nTakk for din bestilling!\n\nHer er en oversikt over din bestilling:\n\nBestillings-ID: ${docId}\nType: ${newValue.type}\nBestillingsdato: ${formattedDate}, ${formattedTime}\nPris: ${newValue.price} NOK\n\nVi vil oppdatere deg så snart reparasjonen er fullført.\n\nMed vennlig hilsen,\nDitt Reparasjonsteam`,
        html: `<p>Hei ${userName},</p><p>Takk for din bestilling!</p><p>Her er en oversikt over din bestilling:</p><ul><li><strong>Bestillings-ID:</strong> ${docId}</li><li><strong>Type:</strong> ${newValue.type}</li><li><strong>Bestillingsdato:</strong> ${formattedDate}, ${formattedTime}</li><li><strong>Pris:</strong> ${newValue.price} NOK</li></ul><p>Vi vil oppdatere deg så snart reparasjonen er fullført.</p><p>Med vennlig hilsen,<br>Ditt Reparasjonsteam</p>`
      };

      // Send the email
      await sgMail.send(msg);
      console.log('Bekreftelsesmail sendt med suksess');
    } catch (error) {
      console.error('Feil ved sending av mail:', error);
    }
  });

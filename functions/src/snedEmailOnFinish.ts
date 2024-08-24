import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as sgMail from '@sendgrid/mail';

admin.initializeApp();

// Set your SendGrid API Key
sgMail.setApiKey('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');

export const sendEmailOnReparasjonFinish = functions.firestore
  .document('reparasjon/{docId}')
  .onUpdate(async (change, context) => {
    const newValue = change.after.data();
    const previousValue = change.before.data();
    const docId = context.params.docId;
    const uid = newValue.UID;

    // Check if the status changed to "finish"
    if (previousValue.status !== 'finish' && newValue.status === 'finish') {
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
          subject: 'Din reparasjon er fullført',
          text: `Hei ${userName},\n\nVi er glade for å informere deg om at din reparasjon er fullført!\n\nHer er detaljene om din reparasjon:\n\nBestillings-ID: ${docId}\nType: ${newValue.type}\nFullført dato: ${formattedDate}, ${formattedTime}\nPris: ${newValue.price} NOK\n\nTakk for at du valgte oss.\n\nMed vennlig hilsen,\nDitt Reparasjonsteam`,
          html: `<p>Hei ${userName},</p><p>Vi er glade for å informere deg om at din reparasjon er fullført!</p><p>Her er detaljene om din reparasjon:</p><ul><li><strong>Bestillings-ID:</strong> ${docId}</li><li><strong>Type:</strong> ${newValue.type}</li><li><strong>Fullført dato:</strong> ${formattedDate}, ${formattedTime}</li><li><strong>Pris:</strong> ${newValue.price} NOK</li></ul><p>Takk for at du valgte oss.</p><p>Med vennlig hilsen,<br>Ditt Reparasjonsteam</p>`
        };

        // Send the email
        await sgMail.send(msg);
        console.log('Fullføringsmail sendt med suksess');

        // Log the event and event time in Firestore
        const eventLog = {
          event: 'sendMailOut',
          eventTime: admin.firestore.FieldValue.serverTimestamp(),
        };

        await admin.firestore().collection('reparasjon').doc(docId).update({
          events: admin.firestore.FieldValue.arrayUnion(eventLog)
        });

        console.log('Hendelsen er logget i Firestore');

      } catch (error) {
        console.error('Feil ved sending av mail eller logging av hendelse:', error);
      }
    }
  });

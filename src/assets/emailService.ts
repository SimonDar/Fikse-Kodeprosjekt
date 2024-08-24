export interface EmailPayload {
    to: string;
    subject: string;
    text: string;
    html: string;
}

export const sendEmail = async (payload: EmailPayload): Promise<void> => {
    const response = await fetch("https://us-central1-fikse-kodeprosjekt-analy-f6ff2.cloudfunctions.net/sendContactEmail", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        throw new Error(`Failed to send email: ${response.statusText}`);
    }
};
 
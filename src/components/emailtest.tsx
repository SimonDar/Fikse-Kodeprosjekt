// src/components/EmailForm.tsx

import React, { useState } from "react";
import { sendEmail, EmailPayload } from "../assets/emailService";

const EmailForm: React.FC = () => {
    const [to, setTo] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [html, setHtml] = useState<string>("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const payload: EmailPayload = {
            to,
            subject,
            text,
            html,
        };

        try {
            await sendEmail(payload);
            alert("Email sent successfully!");
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send email.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    To:
                    <input type="email" value={to} onChange={(e) => setTo(e.target.value)} required />
                </label>
            </div>
            <div>
                <label>
                    Subject:
                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                </label>
            </div>
            <div>
                <label>
                    Text:
                    <textarea value={text} onChange={(e) => setText(e.target.value)} required />
                </label>
            </div>
            <div>
                <label>
                    HTM2L:
                    <textarea value={html} onChange={(e) => setHtml(e.target.value)} required />
                </label>
            </div>
            <button type="submit">Send Email</button>
        </form>
    );
};

export default EmailForm;

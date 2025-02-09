import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Name:", name);  
    console.log("Message:", message);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />

          <label htmlFor="message">Message:</label><br />
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} /><br /><br />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Thank you for your message!</p>
      )}
    </div>
  );
}
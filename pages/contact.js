import { useState } from 'react';

// Contact component for the contact page
export default function Contact() {
  // State for the name input
  const [name, setName] = useState('');
  // State for the message input
  const [message, setMessage] = useState('');
  // State to track form submission
  const [submitted, setSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setSubmitted(true); // Set submitted to true to show the thank you message
    console.log("Name:", name); // Log the name to the console
    console.log("Message:", message); // Log the message to the console

    // In a real application, you would send the data to a server here.
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {/* Conditionally render the form or the thank you message */}
      {!submitted ? ( // If the form has not been submitted
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label><br />
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} // Update name state on input change
          /><br /><br />

          <label htmlFor="message">Message:</label><br />
          <textarea 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} // Update message state on input change
          /><br /><br />

          <button type="submit">Submit</button>
        </form>
      ) : ( // If the form has been submitted
        <p>Thank you for your message!</p>
      )}
    </div>
  );
}
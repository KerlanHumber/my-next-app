import { useState } from 'react';

// This is the main About component.
export default function About() {
  // useState hook to manage the count. Initializes count to 0.
  const [count, setCount] = useState(0);

  // handleClick function to increment the count when the button is clicked.
  const handleClick = () => {
    setCount(count + 1);
  };

  // JSX structure for the About page.
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
      <p>Count: {count}</p> {/* Displays the current count. */}
      <button onClick={handleClick}>Increment</button> {/* Button to increment the count. */}
      {/* Renders the ConditionalMessage component, passing the current count as a prop. */}
      <ConditionalMessage count={count} />
    </div>
  );
}

// ConditionalMessage component to display a message based on the count.
const ConditionalMessage = ({ count }) => {
  // JSX structure for the conditional message.
  return (
    <div>
      {/* Conditional rendering: if count is greater than 5, displays one message, otherwise displays another. */}
      {count > 5 ? <p>Count is greater than 5!</p> : <p>Count is not yet greater than 5.</p>}
    </div>
  );
};
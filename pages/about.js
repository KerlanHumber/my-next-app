import { useState } from 'react';

export default function About() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <ConditionalMessage count={count} />
    </div>
  );
}

const ConditionalMessage = ({ count }) => {
  return (
    <div>
      {count > 5 ? <p>Count is greater than 5!</p> : <p>Count is not yet greater than 5.</p>}
    </div>
  );
};

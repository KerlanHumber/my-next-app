import Link from 'next/link';

// Navbar component for site navigation
export default function Navbar() {
  return (
    <nav>
      {/* Link to the home page */}
      <Link href="/">Home</Link> | 
      {/* Link to the about page */}
      <Link href="/about">About</Link> | 
      {/* Link to the contact page */}
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
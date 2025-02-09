import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <p>This is the home page.</p>
      <nav>
        <Link href="/about">About</Link> | <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
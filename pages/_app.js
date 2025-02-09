import '../styles/globals.css';
import Navbar from '../components/Navbar'; // Correct path!

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
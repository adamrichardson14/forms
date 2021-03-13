import 'tailwindcss/tailwind.css';
import ToastContainer from '../components/ToastContainer';
import { ToastProvider } from '../context/ToastContext';
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ToastProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </ToastProvider>
    </div>
  );
}

export default MyApp;

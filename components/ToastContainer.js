import Toast from '../components/Toast';
import { useToastStateContext } from '../context/ToastContext';

export default function ToastContainer() {
  const { toasts } = useToastStateContext();
  return (
    <div className="absolute bottom-10 w-full z-50">
      <div className="max-w-xl mx-auto">
        {toasts &&
          toasts.map((toast) => (
            <Toast
              id={toast.id}
              key={toast.id}
              type={toast.type}
              message={toast.message}
            />
          ))}
      </div>
    </div>
  );
}

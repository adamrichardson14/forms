import { useToastDispatchContext } from '../context/ToastContext';

export function useToast() {
  const dispatch = useToastDispatchContext();

  function toast(type, message) {
    const id = Math.random().toString(36).substr(2, 9);
    dispatch({ type: 'ADD_TOAST', toast: { type, message, id } });

    setTimeout(() => {
      dispatch({ type: 'DELETE_TOAST', id: id });
    }, 4000);
  }

  return toast;
}

import { createContext, useCallback, useMemo, useState } from 'react';
import useKeydown from '../../hooks/useKeydown';

export const ToastContext = createContext();

function ToastProvider({ children }) {
	const [toasts, setToasts] = useState([]);

	const keydownHandler = useCallback(() => {
		setToasts([]);
	}, []);

	useKeydown('Escape', keydownHandler);

	const createToast = useCallback(
		(message, variant) => {
			const id = crypto.randomUUID();
			const nextToasts = [...toasts, { id, message, variant }];
			setToasts(nextToasts);
		},
		[toasts]
	);

	const dismissToast = useCallback(
		function dismissToast(id) {
			const nextToasts = toasts.filter((toast) => toast.id !== id);
			setToasts(nextToasts);
		},
		[toasts]
	);

	const value = useMemo(() => {
		return { toasts, createToast, dismissToast };
	}, [toasts, createToast, dismissToast]);

	return (
		<ToastContext.Provider value={value}>{children}</ToastContext.Provider>
	);
}

export default ToastProvider;

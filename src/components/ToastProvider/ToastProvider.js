import { createContext, useMemo, useState } from 'react';

export const ToastContext = createContext();

function ToastProvider({ children }) {
	const [toasts, setToasts] = useState([]);

	const value = useMemo(() => {
		return [toasts, setToasts];
	}, [toasts]);

	return (
		<ToastContext.Provider value={value}>{children}</ToastContext.Provider>
	);
}

export default ToastProvider;

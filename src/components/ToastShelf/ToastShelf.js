import React, { useContext, useEffect } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf({ handleDismiss, handleDismissAll }) {
	const { toasts } = useContext(ToastContext);

	useEffect(() => {
		function handleKeyDown(event) {
			if (event.key !== 'Escape') return;
			handleDismissAll();
		}

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keyup', handleKeyDown);
		};
	}, [handleDismissAll]);

	return (
		<ol className={styles.wrapper}>
			{toasts.map(({ id, message, variant }) => {
				return (
					<li className={styles.toastWrapper} key={id}>
						<Toast
							variant={variant}
							handleDismiss={handleDismiss}
							toastId={id}
						>
							{message}
						</Toast>
					</li>
				);
			})}
		</ol>
	);
}

export default ToastShelf;

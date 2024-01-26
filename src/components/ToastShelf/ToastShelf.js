import React, { useContext, useEffect } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/';

function ToastShelf() {
	const { toasts, dismissAllToasts } = useContext(ToastContext);

	useEffect(() => {
		function handleKeyDown(event) {
			if (event.key !== 'Escape') return;
			dismissAllToasts();
		}

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keyup', handleKeyDown);
		};
	}, [dismissAllToasts]);

	return (
		<ol
			className={styles.wrapper}
			role='region'
			aria-live='polite'
			aria-label='notifications'
		>
			{toasts.map(({ id, message, variant }) => {
				return (
					<li className={styles.toastWrapper} key={id}>
						<Toast variant={variant} toastId={id}>
							{message}
						</Toast>
					</li>
				);
			})}
		</ol>
	);
}

export default ToastShelf;

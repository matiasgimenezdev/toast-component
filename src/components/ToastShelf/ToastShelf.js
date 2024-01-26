import React, { useContext } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/';

function ToastShelf() {
	const { toasts } = useContext(ToastContext);

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

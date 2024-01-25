import React, { useState } from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const [message, setMessage] = useState('');
	const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
	const [toasts, setToasts] = useState([]);

	function handleSubmit(event) {
		event.preventDefault();
		const id = crypto.randomUUID();
		const nextToasts = [...toasts, { id, message, variant }];
		setToasts(nextToasts);
		setMessage('');
		setVariant(VARIANT_OPTIONS[0]);
	}

	function handleDismiss(id) {
		const nextToasts = toasts.filter((toast) => toast.id !== id);
		setToasts(nextToasts);
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt='Cute toast mascot' src='/toast.png' />
				<h1>Toast Playground</h1>
			</header>
			<ToastShelf toasts={toasts} handleDismiss={handleDismiss} />
			<form onSubmit={handleSubmit}>
				<div className={styles.controlsWrapper}>
					<div className={styles.row}>
						<label
							htmlFor='message'
							className={styles.label}
							style={{ alignSelf: 'baseline' }}
						>
							Message
						</label>
						<div className={styles.inputWrapper}>
							<textarea
								id='message'
								className={styles.messageInput}
								value={message}
								onChange={(event) => {
									setMessage(event.target.value);
								}}
							/>
						</div>
					</div>

					<div className={styles.row}>
						<div className={styles.label}>Variant</div>
						<div
							className={`${styles.inputWrapper} ${styles.radioWrapper}`}
						>
							{VARIANT_OPTIONS.map((option) => {
								const id = `variant-${option}`;
								return (
									<label htmlFor={id} key={id}>
										<input
											id={id}
											type='radio'
											name='variant'
											value={option}
											onChange={(event) => {
												setVariant(event.target.value);
											}}
											checked={variant === option}
										/>
										{option}
									</label>
								);
							})}
						</div>
					</div>

					<div className={styles.row}>
						<div className={styles.label} />
						<div
							className={`${styles.inputWrapper} ${styles.radioWrapper}`}
						>
							<Button type='submit'>Pop Toast!</Button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;

import { useEffect } from 'react';

function useKeyDown(key, handler) {
	useEffect(() => {
		function handleKeyDown(event) {
			if (event.key === key) {
				handler();
			}
		}

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [key, handler]);
}

export default useKeyDown;

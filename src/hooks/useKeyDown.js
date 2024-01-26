import { useEffect } from 'react';

function useKeydown(key, handler) {
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

export default useKeydown;

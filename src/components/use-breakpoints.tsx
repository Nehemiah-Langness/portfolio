import { useEffect, useState } from 'react';
import { getActiveBreakpoints } from '../services/get-active-breakpoints';


export function useBreakpoints() {
	const [breakpoints, setActiveBreakpoints] = useState(getActiveBreakpoints());

	useEffect(() => {
		function handleResize() {
			setActiveBreakpoints(getActiveBreakpoints());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return breakpoints;
}

import { breakpoints } from './breakpoints';


export function getActiveBreakpoints() {
	const width = window.innerWidth;
	return breakpoints.filter((x) => width >= x.minWidth).map((x) => x.size);
}

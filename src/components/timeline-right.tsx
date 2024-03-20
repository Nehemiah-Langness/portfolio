import { PropsWithChildren } from 'react';


export function TimelineRight({ children, isLg }: PropsWithChildren<{ isLg: boolean; }>) {
	return (
		<div className='timeline-right bg-white' style={{ minHeight: '15rem', marginLeft: '2px', width: isLg ? '50%' : '100%' }}>
			{children}
		</div>
	);
}

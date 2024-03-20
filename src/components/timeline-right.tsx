import { PropsWithChildren } from 'react';

export function TimelineRight({ children }: PropsWithChildren<object>) {
    return (
        <div className='timeline-right bg-white' style={{ minHeight: '15rem', marginLeft: '2px' }}>
            {children}
        </div>
    );
}

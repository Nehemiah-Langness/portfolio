import { PropsWithChildren } from 'react';

export function TimelineLeft({ children }: PropsWithChildren<object>) {
    return (
        <div className={`timeline-left bg-white position-relative`} style={{ minHeight: '15rem', marginRight: '2px' }}>
            <div
                className='position-absolute start-100 top-0 p-2 bg-white rounded-circle translate-middle'
                style={{ border: '4px solid var(--bs-secondary', marginLeft: '2px' }}
            ></div>
            {children}
        </div>
    );
}

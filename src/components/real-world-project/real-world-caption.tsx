import { PropsWithChildren, memo } from 'react';

export const RealWorldCaption = memo(({ href, title, children, altLayout }: PropsWithChildren<{ href: string; title: string; altLayout?: boolean }>) => (
    <div className={`flex-grow-1 px-2 d-flex flex-column order-1 ${altLayout ? 'order-lg-0' : ''}`} style={{ flexBasis: 1 }}>
        <div className='text-center'>
            <span className='h3'>{title}</span>
        </div>
        <div className='flex-grow-1 pb-2'>{children}</div>
        <div className='text-center'>
            <a href={href} target='_blank' rel='noreferrer'>
                Visit Site
            </a>
        </div>
    </div>
));

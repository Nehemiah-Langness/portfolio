import { memo } from 'react';


export const RealWorldScreenShot = memo(({ alt, href, src }: { src: string; href: string; alt: string; }) => (
    <a className='p-2 order-0' href={href} target='_blank' rel='noreferrer'>
        <img
            src={src}
            alt={alt}
            className='rounded-5'
            style={{
                maxWidth: '40rem',
                width: '100%',
            }} />
    </a>
));

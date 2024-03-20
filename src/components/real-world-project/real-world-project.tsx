import { PropsWithChildren, memo } from 'react';
import { RealWorldScreenShot } from './real-world-screen-shot';
import { RealWorldCaption } from './real-world-caption';

export const RealWorldProject = memo(
    ({ alt, href, src, title, altLayout, children }: PropsWithChildren<{ href: string; title: string; src: string; alt: string; altLayout?: boolean; }>) => (
        <div className='d-flex flex-wrap'>
            <RealWorldCaption href={href} title={title} altLayout={altLayout}>
                {children}
            </RealWorldCaption>
            <RealWorldScreenShot href={href} src={src} alt={alt} />
        </div>
    )
);

import { PropsWithChildren, useEffect, useState } from 'react';
import Logo from '../assets/logo.svg?react';
import Branding from '../assets/branding.svg?react';
import './loading.scss';

export function Loading({ children }: PropsWithChildren<object>) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }, 1);
    }, []);

    return (
        <>
            {children}
            {!loaded && (
                <div
                    id='branding-container'
                    onAnimationEnd={(e) => {
                        if (e.animationName === 'container-fade') {
                            setLoaded(true);
                        }
                    }}
                >
                    <Logo width='3rem' />
                    <Branding />
                </div>
            )}
        </>
    );
}

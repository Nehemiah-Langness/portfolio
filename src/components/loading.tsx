import { PropsWithChildren, useState } from "react";
import Logo from '../assets/logo.svg?react';
import Branding from '../assets/branding.svg?react';
import './loading.scss';

export function Loading({ children }: PropsWithChildren<object>) {

    const [loaded, setLoaded] = useState(false);

    return <>
        {children}
        {!loaded && <div id="branding-container">
            <Logo width='3rem' />
            <Branding onAnimationEnd={e => {
                if (e.animationName === 'center') {
                    setLoaded(true);
                }
            }} />
        </div>}
    </>
}
import { PropsWithChildren, useState } from "react";
import Branding from '../assets/branding.svg?react';

export function Loading({ children }: PropsWithChildren<object>) {

    const [loaded, setLoaded] = useState(false);

    return <>
        {children}
        {!loaded && <div id="branding-container" className="position-fixed start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center bg-light">
            <Branding onAnimationEnd={e => {
                if (e.animationName === 'center') {
                    //setLoaded(true);
                }
            }} />
        </div>}
    </>
}
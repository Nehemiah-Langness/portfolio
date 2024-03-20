import { useBreakpoints } from './use-breakpoints';
import { TimelineLeft } from './timeline-left';
import { TimelineRight } from './timeline-right';

export function TimelineBlock({ contentLeft, contentRight }: { contentLeft?: React.ReactNode; contentRight?: React.ReactNode }) {
    const breakpoints = useBreakpoints();
    const isLg = breakpoints.includes('lg');

    return (
        <div className={`d-flex bg-secondary ${!isLg ? 'timeline-condensed' : ''}`}>
            <TimelineLeft>{isLg ? contentLeft : null}</TimelineLeft>
            <TimelineRight>{isLg ? contentRight : contentRight ?? contentLeft}</TimelineRight>
        </div>
    );
}

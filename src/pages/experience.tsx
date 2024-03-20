import { CSSProperties } from 'react';
import { TimelineBlock } from '../components/timeline-block';
import { TimelineContent } from '../components/timeline-content';

export default function Experience() {
    return (
        <>
            <TimelineBlock
                contentLeft={
                    <TimelineContent
                        year='2012 - 2016'
                        style={{ '--org-color': '#172b54' } as CSSProperties}
                        title='Attended College'
                        logo={
                            <a href='https://cune.edu/' target='_blank' rel="noreferrer">
                                <img src='https://cune.edu/application/themes/icarus/images/logo_full_color.svg' style={{ height: '3rem' }} />
                            </a>
                        }
                    >
                        <dl className='row mb-0'>
                            <dt className='col-6'>Degrees</dt>
                            <dl className='col-6 text-end mb-0'>
                                Theology - <span className='fst-italic'>B.A.</span>
                                <br />
                                Computer Science - <span className='fst-italic'>B.A.</span>
                            </dl>
                        </dl>
                    </TimelineContent>
                }
            />
            <TimelineBlock
                contentRight={
                    <TimelineContent
                        year='2012-2015'
                        style={{ '--org-color': '#172b54' } as CSSProperties}
                        title='Work Experience'
                        logo={
                            <a href='https://cune.edu/' target='_blank' rel="noreferrer">
                                <img src='https://cune.edu/application/themes/icarus/images/logo_full_color.svg' style={{ height: '3rem' }} />
                            </a>
                        }
                    >
                        <dl className='row mb-0'>
                            <dt className='col-6'>Student Worker</dt>
                            <dl className='col-6 text-end mb-0'>2012-2015</dl>
                        </dl>
                    </TimelineContent>
                }
            />
            <TimelineBlock
                contentLeft={
                    <TimelineContent
                        year='2013-2020'
                        style={{ '--org-color': '#0e3152' } as CSSProperties}
                        title='Work Experience'
                        logo={
                            <a href='https://www.concordiaplans.org/' target='_blank' rel="noreferrer">
                                <img src='https://concordiaplansmember.hroffice.com/Downloaded/833de537-e007-4018-9523-77a8959d5f42.png' style={{ width: '15rem' }} />
                            </a>
                        }
                    >
                        <dl className='row mb-0'>
                            <dt className='col-6'>Internship</dt>
                            <dl className='col-6 text-end '>2013-2016</dl>
                            <dt className='col-6'>Software Developer</dt>
                            <dl className='col-6 text-end '>2016-2019</dl>
                            <dt className='col-6'>Senior Software Developer</dt>
                            <dl className='col-6 text-end '>2019-2020</dl>
                        </dl>
                    </TimelineContent>
                }
            />
            <TimelineBlock
                contentRight={
                    <TimelineContent
                        year='2020-Current'
                        style={{ '--org-color': '#005696' } as CSSProperties}
                        title='Work Experience'
                        logo={
                            <div className='d-inline-block rounded-1' style={{ background: '#005696', padding: '0.5rem 1rem' }}>
                                <a href='https://www.lcms.org/' target='_blank' rel="noreferrer">
                                    <img src='https://www.lcms.org/image/template/logo-desktop.svg' style={{ width: '15rem' }} />
                                </a>
                            </div>
                        }
                    >
                        <dl className='row mb-0'>
                            <dt className='col-6'>Senior Software Developer</dt>
                            <dl className='col-6 text-end '>2020-2022</dl>
                            <dt className='col-6'>Senior Software Technical Lead</dt>
                            <dl className='col-6 text-end '>2022-Current</dl>
                        </dl>
                    </TimelineContent>
                }
            />
        </>
    );
}

import GitHub from '../assets/github.svg?react';
import { ContactCardApplicationCard } from '../components/application-cards/contact-card-application-card';
import { NotesApplicationCard } from '../components/application-cards/notes-application-card';

export default function Code() {
    return (
        <>
            <span className='display-5'>Application Showcase</span>
            <div
                className='mt-3 d-flex p-2 flex-wrap justify-content-center bg-secondary'
                style={{
                    marginLeft: 'calc(var(--bs-gutter-x) * -0.5)',
                    marginRight: 'calc(var(--bs-gutter-x) * -0.5)',
                }}
            >
                <ContactCardApplicationCard />
                <NotesApplicationCard />
            </div>

            <div className='mt-5'></div>
            <span className='fs-18 fw-light'>Source Code</span>
            <div className='ps-3 mt-3'>
                <div className='mb-3'>
                    <a href='https://github.com/Nehemiah-Langness?tab=repositories' target='_blank' rel='noreferrer'>
                        <div className='d-flex align-items-center'>
                            <GitHub height='1.5rem' className='me-2' style={{ color: '#171515' }} /> All GitHub Repositories
                        </div>
                    </a>
                </div>

                <div className='mb-3'>
                    <a href='https://github.com/Nehemiah-Langness/contact-card' target='_blank' rel='noreferrer'>
                        <div className='d-flex align-items-center'>
                            <GitHub height='1.5rem' className='me-2' style={{ color: '#171515' }} /> Contact Card
                        </div>
                    </a>
                </div>

                <div className='mb-3'>
                    <a href='https://github.com/Nehemiah-Langness/Notes' target='_blank' rel='noreferrer'>
                        <div className='d-flex align-items-center'>
                            <GitHub height='1.5rem' className='me-2' style={{ color: '#171515' }} /> Notes
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}

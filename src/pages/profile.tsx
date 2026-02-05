import { memo } from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { ContactCardApplicationCard } from '../components/application-cards/contact-card-application-card';
import { NotesApplicationCard } from '../components/application-cards/notes-application-card';
import { RealWorldProject } from '../components/real-world-project/real-world-project';
import { Link } from 'react-router-dom';
import FullStack from '../assets/full-stack.svg?react';
import GitHub from '../assets/github.svg?react';
import LinkedIn from '../assets/linked-in.svg?react';
import { HappyHealthyHousewivesApplicationCard } from '../components/application-cards/hhhw-application-card';

export default function Profile() {
    return (
        <div>
            <Navbar />
            <div className='d-flex flex-column align-items-center py-5'>
                <div className='display-5 mb-4'>Hi, I'm Nehemiah</div>
                <ProfilePicture />
            </div>
            <div className='bg-white'>
                <div className='container py-5'>
                    <div className='text-center pb-5'>
                        <span className='display-5'>Full-Stack Developer</span>
                        <span className='d-block h4 mb-0 fw-light'>Front-end, back-end, containerization, hosting</span>
                    </div>
                    <div className='d-flex justify-content-center mb-3'>
                        <FullStack width='50vw' />
                    </div>
                    <div className='fs-16 text-center'>
                        <div className='mb-3'>I am a software developer with experience in .NET, Typescript, and T-SQL.</div>
                        <div className='mb-3'>I regularly work with React, Docker, Node.JS, and Microsoft SQL Server.</div>
                        <div className='mb-3'>I design, architect, and build applications across the entire stack from the UI through the API to database management.</div>
                    </div>
                </div>
            </div>

            <div className='bg-secondary-subtle'>
                <div className='container py-5 bg-secondary-subtle'>
                    <div className='text-center pb-5 '>
                        <span className='display-5'>Real-World Projects</span>
                        <span className='d-block h4 mb-0 fw-light'>These are projects I've built with a team</span>
                    </div>
                    <RealWorldProject title='LCMS Locator' href='https://locator.lcms.org/dashboard' src='/site-locator.png' alt='Locator'>
                        Find LCMS churches and schools using keyword searches, geographic searches, or by services offered.
                    </RealWorldProject>
                </div>
            </div>
            <div className='bg-white'>
                <div className='container py-5'>
                    <RealWorldProject title='Making Disciples for Life' href='https://mdfl.lcms.org/' src='/site-mdfl.png' alt='MDFL' altLayout>
                        Resource repository for congregations and church workers. Allows users to locate resources by topic and request additional resources be create or
                        distributed.
                    </RealWorldProject>
                </div>
            </div>
            <div className='bg-secondary-subtle'>
                <div className='container py-5 bg-secondary-subtle'>
                    <RealWorldProject title='LCMS Document Library' href='https://files.lcms.org/dashboard' src='/site-files.png' alt='Locator'>
                        Online document repository for the LCMS. Administrators can upload files and categorize into folders and topics. Users can locate files by folder, file
                        name, file type, or topic.
                    </RealWorldProject>
                </div>
            </div>
            <div className='bg-white'>
                <div className='container py-5'>
                    <div className='text-center pb-5'>
                        <span className='display-5'>Personal Projects</span>
                        <span className='d-block h4 mb-0 fw-light'>These are projects I've built solo in my spare time</span>
                    </div>
                    <div className='d-flex justify-content-center flex-wrap'>
                        <HappyHealthyHousewivesApplicationCard />
                        <ContactCardApplicationCard />
                        <NotesApplicationCard />
                    </div>
                </div>
            </div>
            <div className='bg-secondary-subtle'>
                <div className='container py-5 bg-secondary-subtle'>
                    <div className='text-center pb-5'>
                        <span className='display-5'>Work Experience and Education</span>
                        <span className='d-block h4 mb-0 fw-light'>B.A. in Computer Science and {new Date().getFullYear() - 2013} Year's Experience</span>
                    </div>
                    <div className='d-flex justify-content-center py-4'>
                        <Link to='/experience' className='d-block w-75 mb-5'>
                            <div className='pb-5 text-center fs-16'>View my full work experience and education timeline</div>
                            <div className='position-relative mb-4'>
                                <div className=' border border-2 border-dark position-absolute start-0 end-0'></div>
                                <div
                                    style={{ marginTop: 1 }}
                                    className='p-2 bg-secondary-subtle border border-4 border-dark position-absolute top-0 start-0 translate-middle rounded-circle'
                                ></div>
                                <div
                                    style={{
                                        marginTop: 1,
                                        left: (((2019 - 2012) / (2022 - 2012)) * 100).toString() + '%',
                                    }}
                                    className='p-2 bg-secondary-subtle border border-4 border-dark position-absolute top-0 translate-middle rounded-circle'
                                ></div>
                                <div
                                    style={{ marginTop: 1 }}
                                    className='p-2 bg-secondary-subtle border border-4 border-dark position-absolute top-0 start-100 translate-middle rounded-circle'
                                ></div>

                                <div className='position-absolute bottom-100 start-0 translate-middle text-dark'>2012</div>
                                <div className='position-absolute bottom-100 translate-middle text-dark' style={{ left: (((2019 - 2012) / (2022 - 2012)) * 100).toString() + '%' }}>
                                    2019
                                </div>
                                <div className='position-absolute bottom-100 start-100 translate-middle text-dark'>2022</div>
                                <div className='position-absolute top-100 start-0 translate-middle text-dark mt-4' style={{ bottom: 0 }}>
                                    Student Worker
                                </div>
                                <div
                                    className='position-absolute top-100 translate-middle text-dark mt-4'
                                    style={{ left: (((2019 - 2012) / (2022 - 2012)) * 100).toString() + '%', bottom: 0 }}
                                >
                                    Senior Software Developer
                                </div>
                                <div className='position-absolute top-100 start-100 translate-middle text-dark mt-4' style={{ bottom: 0 }}>
                                    Senior Software Technical Lead
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='bg-white'>
                <div className='container py-5'>
                    <div className='d-flex justify-content-center'>
                        <a href='https://github.com/Nehemiah-Langness' target='_blank' rel='noreferrer'>
                            <GitHub height='3rem' className='mx-2' style={{ color: '#171515' }} />
                        </a>
                        <a href='https://www.linkedin.com/in/nehemiah-langness-95961b14b/' target='_blank' rel='noreferrer'>
                            <LinkedIn height='3rem' className='mx-2' />
                        </a>
                    </div>
                </div>
            </div>
            <div style={{ height: '10rem' }}></div>
            <Footer />
        </div>
    );
}

const ProfilePicture = memo(() => (
    <div
        className='border border-5 bg-dark border-secondary rounded-circle overflow-hidden'
        style={{
            width: '20rem',
            height: '20rem',
            background: 'url("/512.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}
    ></div>
));

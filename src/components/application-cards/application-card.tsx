import { CSSProperties } from 'react';

interface ApplicationCardProps {
    imageBackgroundColor?: string;
    imageUrl: string;
    siteUrl: string;
    title: string;
    text: string;
}

export function ApplicationCard({ imageUrl, siteUrl, text, title, imageBackgroundColor }: ApplicationCardProps) {
    return (
        <a href={siteUrl} target='_blank' rel="noreferrer" className='d-flex'>
            <div
                className='card mx-4 my-4'
                style={
                    {
                        width: '20rem',
                        '--bs-card-border-color': 'var(--bs-white)',
                    } as CSSProperties
                }
            >
                <img style={{ background: imageBackgroundColor, height: '10rem' }} src={imageUrl} className='card-img-top' alt={title} />
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>{text}</p>
                </div>
            </div>
        </a>
    );
}

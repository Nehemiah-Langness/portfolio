import { memo } from 'react';
import { ApplicationCard } from './application-card';

export const NotesApplicationCard = memo(() => (
    <ApplicationCard
        imageUrl='https://notes.n-lang.dev/favicon.svg'
        siteUrl='https://notes.n-lang.dev'
        title='Notes'
        text='Keep notes of things you need to remember'
        imageBackgroundColor='var(--bs-white)' />
));

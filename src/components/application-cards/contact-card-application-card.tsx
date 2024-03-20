import { memo } from 'react';
import { ApplicationCard } from './application-card';

export const ContactCardApplicationCard = memo(() => (
    <ApplicationCard
        imageUrl='https://contact.n-lang.dev/favicon.svg'
        siteUrl='https://contact.n-lang.dev'
        title='Contact Card'
        text='Build a digital contact card with sharing and vCard capabilities'
        imageBackgroundColor='var(--bs-white)' />
));

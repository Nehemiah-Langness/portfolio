import { memo } from 'react';
import { ApplicationCard } from './application-card';

export const HappyHealthyHousewivesApplicationCard = memo(() => (
    <ApplicationCard
        imageUrl='/hhhw.png'
        siteUrl='https://happyhealthyhousewives.com/'
        title='Happy Healthy Housewives'
        text='Happy Wife | Happy Home | Healthy Life'
        imageBackgroundColor='#fff6eb' 
        objectFit='contain'/>
));

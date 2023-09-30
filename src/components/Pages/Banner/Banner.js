import React from 'react';
import Image from 'next/image';
import classes from './Banner.module.css';
import phone from '../../../app/assets/images/telephone.png';
import cloudTop from '../../../app/assets/images/cloud sopra.png';
import cloudBottom from '../../../app/assets/images/cloud sotto.png';

export const Banner = () => {
    return (
        <section className={classes['layout__banner']}>
            <div className='banner__images'></div>
        </section>
    );
};

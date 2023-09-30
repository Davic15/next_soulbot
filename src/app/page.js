import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { Banner } from '@/components/Pages/Banner/Banner';

config.autoAddCss = false;

export default function Home() {
    return (
        <div className='layout'>
            <Header />
            <Banner />
            <Footer />
        </div>
    );
}

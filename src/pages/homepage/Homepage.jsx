import React from 'react';
import './homepage.css';
import { HomeServicesLeft, HomeServicesRight } from '../../components';
import { Header } from '../../containers';

function Homepage() {
    return (
        <div className='wellness__homepage'>
            <div className='wellness__homepage-bg'>
                <Header />
                <div className='wellness__homepage-services'>
                    <h1>Services</h1>
                    <HomeServicesLeft services="Infrared Sauna" />
                    <HomeServicesRight services="Cold Plunge" />
                    <HomeServicesLeft services="IV Therapy and Vitamin Injections" />
                </div>
            </div>
        </div>
    )
}

export default Homepage;
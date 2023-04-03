import React from 'react';
import './homepage.css';
import { HomeServicesLeft, HomeServicesRight } from '../../components';
import { Header } from '../../containers';

function Homepage() {
    return (
        <div className='Homepage'>
            <div className='gradient__bg'>
                <Header />
                <p>Services</p>
                <HomeServicesLeft services="Infrared Sauna" />
                <HomeServicesRight services="Cold Plunge" />
                <HomeServicesLeft services="IV Therapy and Vitamin Injections" />
            </div>
        </div>
    )
}

export default Homepage;
import React from 'react';
import './homepage.css';
import { HomeServicesLeft, HomeServicesRight } from '../../components';
import { Header } from '../../containers';
import infraredSauna from '../../assets/infrared_sauna.jpg';
import coldPlunge from '../../assets/cold_plunge.jpg';
import ivTherapy from '../../assets/iv_therapy.jpg';

function Homepage() {
    return (
        <div className='wellness__homepage'>
            <div className='wellness__homepage-bg'>
                <Header />
                <div className='wellness__homepage-services' id='services'>
                    <h1>Services</h1>
                    <HomeServicesLeft
                        image={infraredSauna}
                        link="sauna"
                        services="Infrared Sauna"
                        description="Rejuvenate, relieve and relax"
                    />
                    <HomeServicesRight
                        image={coldPlunge}
                        link="coldplunge"
                        services="Cold Plunge"
                        description="Invigorate, boost your immunity and enhance your recovery and performance"
                    />
                    <HomeServicesLeft
                        image={ivTherapy}
                        link="vitaminivtherapy"
                        services="IV Therapy/Vitamin Injections"
                        description=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Homepage;
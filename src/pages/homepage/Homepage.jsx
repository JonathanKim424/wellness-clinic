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
                <div className='wellness__homepage-services'>
                    <h1>Services</h1>
                    <HomeServicesLeft
                        image={infraredSauna}
                        link="sauna"
                        services="Infrared Sauna"
                        description="See provided Sunlighten documents for benefits. Please add the benefits and the 'Health Experts Recommend' to the website. Our saunas are private but have room for two people..."
                    />
                    <HomeServicesRight
                        image={coldPlunge}
                        link="cold"
                        services="Cold Plunge"
                        description="Benefits include immune support, boost energy, recovery and performance, and more."
                    />
                    <HomeServicesLeft
                        image={ivTherapy}
                        link="iv"
                        services="IV Therapy and Vitamin Injections"
                        description="We, at Circuit Works Wellness, want to ensure your safety with all our treatments. We require lab work (within the past 6 months) prior to receiving any IV therapy or vitamin injections. You are welcome to provide lab work done with your primary doctor/outside facility or you can schedule lab work to be done with us. If you want to schedule lab work, please click on the provided link below and come fasting (nothing to eat or drink except for water, coffee or tea without cream or sugar after midnight)."
                    />
                </div>
            </div>
        </div>
    )
}

export default Homepage;
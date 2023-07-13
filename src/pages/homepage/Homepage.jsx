import React from 'react';
import './homepage.css';
import { HomeServicesLeft, HomeServicesRight } from '../../components';
import { Header } from '../../containers';
import {
    cold_plungejpg,
    cold_plungewebp,
    infrared_saunajpg,
    infrared_saunawebp,
    iv_therapyjpg,
    iv_therapywebp,
    botoxjpg,
    botoxwebp
} from '../../assets';

function Homepage() {
    return (
        <div className='wellness__homepage'>
            <div className='wellness__homepage-bg'>
                <Header />
                <div className='wellness__homepage-services' id='services'>
                    <h1>Services</h1>
                    <HomeServicesLeft
                        src={iv_therapywebp}
                        fallback={iv_therapyjpg}
                        link="vitaminivtherapy"
                        alttag="IV Therapy/Vitamin Injections"
                        description=""
                    />
                    <HomeServicesRight
                        src={infrared_saunawebp}
                        fallback={infrared_saunajpg}
                        link="sauna"
                        alttag="Infrared Sauna"
                        description="Rejuvenate, relieve and relax"
                    />
                    <HomeServicesLeft
                        src={cold_plungewebp}
                        fallback={cold_plungejpg}
                        link="coldplunge"
                        alttag="Cold Plunge"
                        description="Invigorate, boost your immunity and enhance your recovery and performance"
                    />
                </div>
                <div className='wellness__homepage-botox'>
                    <HomeServicesRight
                        src={botoxwebp}
                        fallback={botoxjpg}
                        link="/"
                        alttag="Botox"
                        description="Coming soon!"
                        imgtag={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default Homepage;
import React from 'react';
import './contact.css';
import { GMap } from '../../components';

function Contact() {
    return (
        <div className='wellness__contact'>
            <div className='wellness__contact-header'>
                <h1>Contact us today!</h1>
            </div>
            <div className='wellness__contact-info'>
                <div className='wellness__contact-info-map'>
                    <GMap />
                </div>
                <div className='wellness__contact-info-text'>
                    Circuit Works<br />
                    1837 Lincoln Blvd<br />
                    Santa Monica, CA 90404<br />
                    (209) 255-6830<br />
                    wellness@circuitworksla.com<br />
                </div>
            </div>
        </div>
    )
}

export default Contact;
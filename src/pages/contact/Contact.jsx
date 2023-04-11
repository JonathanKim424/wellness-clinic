import React from 'react';
import './contact.css';
import { GMap } from '../../components';

function Contact() {
    return (
        <div className='wellness__contact'>
            <div className='wellness__contact_header'>
                <h1>Our Mission</h1>
                <p>
                    At our health clinic, our mission is to empower our
                    clients to achieve optimal health and wellness through
                    a holistic approach to treatment. We specialize in
                    providing vitamin injections, IV therapy, cold plunge,
                    and infrared sauna therapy services, all of which are
                    designed to promote detoxification, improve immune
                    function, and enhance physical and mental performance.
                    Our team of experienced professionals is committed to
                    providing personalized care, expert guidance, and
                    cutting-edge treatments to help our clients feel their
                    best and live their healthiest lives.
                </p>
                <p>Book your appointment today!</p>
                <div className='wellness__contact_header-book'>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Book Now!</a>
                </div>
            </div>
            <div className='wellness__contact_header-info'>
                <div className='wellness__contact_header-info_map'>
                    <GMap />
                </div>
                <div className='wellness__contact_header-info_text'>
                    <p>Circuit Works</p>
                    <p>1837 Lincoln Blvd</p>
                    <p>Santa Monica, CA 90404</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
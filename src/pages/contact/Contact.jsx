import React from 'react';
import './contact.css';
import { GMap } from '../../components';
import { book_url } from '../../index.js';

function Contact() {
    return (
        <div className='wellness__contact'>
            <div className='wellness__contact-header'>
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
                    providing personalized care and expert guidance to
                    help our clients feel their best and live their
                    healthiest lives.
                </p>
                <p>Book your appointment today!</p>
                <div className='wellness__contact-header-book'>
                    <a href={book_url} target="_blank" rel="noopener noreferrer">Book Now!</a>
                </div>
            </div>
            <div className='wellness__contact-info'>
                <div className='wellness__contact-info-map'>
                    <GMap />
                </div>
                <div className='wellness__contact-info-text'>
                    <p>Circuit Works</p>
                    <p>1837 Lincoln Blvd</p>
                    <p>Santa Monica, CA 90404</p>
                    <p>(209) 255-6830</p>
                    <p>email@email.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
import React from 'react';
import './homeServicesLeft.css';

function HomeServicesLeft(props) {
    const services = props.services;
    return (
        <div className='wellness__homeServicesLeft'>
            <p>This is a left side section for {services}.</p>
        </div>
    )
}

export default HomeServicesLeft
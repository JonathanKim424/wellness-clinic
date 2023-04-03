import React from 'react';
import './homeServicesRight.css';

function HomeServicesRight(props) {
    const services = props.services;
    return (
        <div className='wellness__homeServicesRight'>
            <p>This is a right side section for {services}.</p>
        </div>
    )
}

export default HomeServicesRight
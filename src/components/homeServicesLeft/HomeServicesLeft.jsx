import React from 'react';
import './homeServicesLeft.css';

function HomeServicesLeft(props) {
    const image = props.image;
    const services = props.services;
    const description = props.description;
    return (
        <div className='wellness__homeServicesLeft'>
            <div className='wellness__homeServicesLeft-img'>
                <img src={image} alt={services} />
            </div>
            <div className='wellness__homeServicesLeft-text'>
                <h1>{services}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default HomeServicesLeft
import React from 'react';
import './homeServicesRight.css';

function HomeServicesRight(props) {
    const image = props.image;
    const services = props.services;
    const description = props.description;
    return (
        <div className='wellness__homeServicesRight'>
            <div className='wellness__homeServicesRight-text'>
                <h1>{services}</h1>
                <p>{description}</p>
            </div>
            <div className='wellness__homeServicesRight-img'>
                <img src={image} alt={services} />
            </div>
        </div>
    )
}

export default HomeServicesRight
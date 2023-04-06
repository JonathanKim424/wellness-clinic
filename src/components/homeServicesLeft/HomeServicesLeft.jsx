import React from 'react';
import './homeServicesLeft.css';
import { HashLink as Link } from 'react-router-hash-link';

function HomeServicesLeft(props) {
    const image = props.image;
    const linkhash = "/services#" + props.link;
    const services = props.services;
    const description = props.description;
    return (
        <div className='wellness__homeServicesLeft'>
            <div className='wellness__homeServicesLeft-img'>
                <Link as={Link} to={linkhash}><img src={image} alt={services} /></Link>
            </div>
            <div className='wellness__homeServicesLeft-text'>
                <h1>{services}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default HomeServicesLeft
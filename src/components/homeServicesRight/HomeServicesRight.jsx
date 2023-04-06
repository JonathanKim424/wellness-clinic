import React from 'react';
import './homeServicesRight.css';
import { HashLink as Link } from 'react-router-hash-link';

function HomeServicesRight(props) {
    const image = props.image;
    const linkhash = "/services#" + props.link;
    const services = props.services;
    const description = props.description;
    return (
        <div className='wellness__homeServicesRight'>
            <div className='wellness__homeServicesRight-text'>
                <h1>{services}</h1>
                <p>{description}</p>
            </div>
            <div className='wellness__homeServicesRight-img'>
                <Link as={Link} to={linkhash}><img src={image} alt={services} /></Link>
            </div>
        </div>
    )
}

export default HomeServicesRight
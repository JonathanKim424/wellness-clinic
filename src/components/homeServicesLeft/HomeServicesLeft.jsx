import React from 'react';
import './homeServicesLeft.css';
import { useInView } from 'react-intersection-observer';
import { HashLink as Link } from 'react-router-hash-link';

function HomeServicesLeft(props) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.12
    });
    const image = props.image;
    const linkhash = props.link;
    const services = props.services;
    const description = props.description;
    return (
        <div ref={ref} className={`wellness__homeServicesLeft ${inView ? 'wellness__homeServicesLeft-animation' : 'wellness__homeServicesLeft-noView'}`}>
            <div className='wellness__homeServicesLeft-img'>
                <Link as={Link} to={linkhash}><img src={image} alt={services} /></Link>
            </div>
            <div className='wellness__homeServicesLeft-text'>
                <h1>{services}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default HomeServicesLeft
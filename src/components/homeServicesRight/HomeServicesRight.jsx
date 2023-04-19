import React from 'react';
import './homeServicesRight.css';
import { useInView } from 'react-intersection-observer';
import { HashLink as Link } from 'react-router-hash-link';

function HomeServicesRight(props) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });
    const image = props.image;
    const linkhash = props.link;
    const services = props.services;
    const description = props.description;
    return (
        <div ref={ref} className={`wellness__homeServicesRight ${inView ? 'wellness__homeServicesRight-animation' : 'wellness__homeServicesRight-noView'}`}>
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
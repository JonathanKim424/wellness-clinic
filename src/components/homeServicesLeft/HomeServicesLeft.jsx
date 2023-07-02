import React from 'react';
import './homeServicesLeft.css';
import { useInView } from 'react-intersection-observer';
import { HashLink as Link } from 'react-router-hash-link';
import { ImgWithFallback } from '../../components';

function HomeServicesLeft(props) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.12
    });
    const src = props.src;
    const fallback = props.fallback;
    const linkhash = props.link + "#";
    const alttag = props.alttag;
    const description = props.description;
    return (
        <div ref={ref} className={`wellness__homeServicesLeft ${inView ? 'wellness__homeServicesLeft-animation' : 'wellness__homeServicesLeft-noView'}`}>
            <div className='wellness__homeServicesLeft-img'>
                <Link as={Link} to={linkhash}>
                    <ImgWithFallback src={src} fallback={fallback} alttag={alttag} />
                </Link>
            </div>
            <div className='wellness__homeServicesLeft-text'>
                <h1>{alttag}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default HomeServicesLeft
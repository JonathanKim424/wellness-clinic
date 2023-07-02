import React from 'react';
import './homeServicesRight.css';
import { useInView } from 'react-intersection-observer';
import { HashLink as Link } from 'react-router-hash-link';
import { ImgWithFallback } from '../../components';

function HomeServicesRight(props) {
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
        <div ref={ref} className={`wellness__homeServicesRight ${inView ? 'wellness__homeServicesRight-animation' : 'wellness__homeServicesRight-noView'}`}>
            <div className='wellness__homeServicesRight-text'>
                <h1>{alttag}</h1>
                <p>{description}</p>
            </div>
            <div className='wellness__homeServicesRight-img'>
                <Link as={Link} to={linkhash}>
                    <ImgWithFallback src={src} fallback={fallback} alttag={alttag} />
                </Link>
            </div>
        </div>
    )
}

export default HomeServicesRight
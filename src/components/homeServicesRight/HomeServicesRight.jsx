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
    const imgtag = props.imgtag;
    return (
        <div ref={ref} className={`wellness__homeServicesRight ${inView ? 'wellness__homeServicesRight-animation' : 'wellness__homeServicesRight-noView'}`}>
            <div className='wellness__homeServicesRight-text'>
                <h1>{alttag}</h1>
                <div className='wellness__homeServicesRight-text_subheading'>
                    {description}
                </div>
            </div>
            <div className='wellness__homeServicesRight-img'>
                <Link as={Link} to={linkhash}>
                    <ImgWithFallback src={src} fallback={fallback} alttag={alttag} />
                </Link>
                {imgtag && (
                    <div>
                        <a href="https://www.freepik.com/free-photo/cosmetic-botox-injection-forehead_26673066.htm#page=2&query=botox&position=2&from_view=keyword&track=sph">Image by ArtPhoto_studio</a> on Freepik 
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomeServicesRight
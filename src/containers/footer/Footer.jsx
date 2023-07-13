import React from 'react';
import './footer.css';
import { BsInstagram, BsFacebook } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='wellness__footer'>
            <div className='wellness__footer-icons'>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                <a href="https://www.facebook.com/CircuitWorks" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
            </div>
            <div className='wellness__footer-copyright'>
                &#169; 2023 Circuit Works Wellness. All rights reserved.
            </div>
        </div>
    )
}

export default Footer
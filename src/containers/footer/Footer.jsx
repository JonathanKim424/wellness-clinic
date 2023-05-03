import React from 'react';
import './footer.css';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='wellness__footer'>
            <div className='wellness__footer-icons'>
                <a href="https://www.facebook.com/CircuitWorks" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
            </div>
            <div className='wellness__footer-copyright'>
                <p>&#169; 2023 Circuit Works Wellness. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
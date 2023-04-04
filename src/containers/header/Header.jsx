import React from 'react';
import './header.css';
import image from '../../assets/header.jpg';

const Header = () => {
    return (
        <div className='wellness__header'>
            <div className='wellness__header-bg' style={{ backgroundImage: `url(${image})`}}>
                <div className='wellness__header-text'>
                    <p>Welcome to Circuit Works Wellness</p>
                    <p>We are offering vitamin injections, IV therapy, cold plunge and infrared therapy</p>
                </div>
            </div>
        </div>
    )
}

export default Header
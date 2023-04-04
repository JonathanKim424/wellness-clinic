import React from 'react';
import './header.css';
import image from '../../assets/header.jpg';

const Header = () => {
    return (
        <div className='wellness__header'>
            <div className='wellness__header-bg' style={{ backgroundImage: `url(${image})`}}>
                <div className='wellness__header-text'>
                    <div className='wellness__header-text_h1'>Welcome to Circuit Works Wellness</div>
                    <div className='wellness__header-text_h3'>We are offering vitamin injections, IV therapy, cold plunge and infrared therapy</div>
                </div>
            </div>
        </div>
    )
}

export default Header
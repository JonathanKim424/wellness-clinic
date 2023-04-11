import React from 'react';
import './coldPlunge.css';
import image from '../../assets/cold_plunge.jpg';

function ColdPlunge() {
    return (
        <div className='wellness__coldplunge'>
            <div className='wellness__coldplunge-img'>
                <img src={image} alt="Cold Plunge" />
            </div>
            <div className='wellness__coldplunge-text'>
                <p>Benefits:</p>
                <ul>
                    <li>Immune Support</li>
                    <li>Boost Energy</li>
                    <li>Recovery and Performance</li>
                    <li>Mood</li>
                    <li>Pain Relief</li>
                    <li>Stress Relief</li>
                    <li>Improve Sleep</li>
                </ul>
            </div>
        </div>
    )
}

export default ColdPlunge;
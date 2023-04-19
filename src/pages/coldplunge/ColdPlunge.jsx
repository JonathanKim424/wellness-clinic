import React from 'react';
import './coldPlunge.css';
import image from '../../assets/cold_plunge.jpg';

function ColdPlunge() {
    return (
        <div className='wellness__coldplunge'>
            <div className='wellness__coldplunge-header' style={{ backgroundImage: `url(${image})`}}>
                <h1>Cold Plunge</h1>
            </div>
            <div className='wellness__coldplunge-info'>
                <div className='wellness__coldplunge-info-text'>
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
        </div>
    )
}

export default ColdPlunge;
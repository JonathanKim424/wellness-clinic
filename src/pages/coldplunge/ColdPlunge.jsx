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
                <div className='wellness__coldplunge-info-promotion'>
                    <h1>Introduction Promo for contrast therapy:</h1>
                    <h2>Infrared therapy and cold plunge</h2>
                    <p>$39 for 30 minutes for members</p>
                    <p>$49 for 30 minutes for non-members</p>
                </div>
                <div className='wellness__coldplunge-info-text'>
                    <h3>Benefits of Cold Plunge:</h3>
                    <ul>
                        <li><p>Boost immunity, boost metabolism, reduce chronic pain</p></li>
                        <li><p>Improve sleep, improve mood, boost energy</p></li>
                        <li><p>Enhance performance and recovery after a workout</p></li>
                    </ul>
                    <h3>FAQs</h3>
                    <ol>
                        <li>
                            <h4>How cold is it?</h4>
                            <p>We keep it at 50&#186;F-55&#186;F but you can make requests to make it colder. We recommend not starting at a lower temperature if you are not accustomed.</p>
                        </li>
                        <li>
                            <h4>How often can I use the cold plunge?</h4>
                            <p>Cold plunges are fairly safe and can be used daily. We recommend starting three times a week and check out how you feel!</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default ColdPlunge;
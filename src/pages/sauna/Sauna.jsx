import React from 'react';
import './sauna.css';
import image from '../../assets/infrared_sauna.jpg';

function Sauna() {
    return (
        <div className='wellness__sauna'>
            <div className='wellness__sauna-header' style={{ backgroundImage: `url(${image})`}}>
                <h1>Infrared Sauna</h1>
            </div>
            <div className='wellness__sauna-info'>
                <div className='wellness__sauna-info-promotion'>
                    <h1>Introduction Promo for contrast therapy:</h1>
                    <h2>Infrared therapy and cold plunge</h2>
                    <p>$39 for 30 minutes for members</p>
                    <p>$49 for 30 minutes for non-members</p>
                </div>
                <div className='wellness__sauna-info-text'>
                    <h3>Is it safe for me to use the infrared sauna?</h3>
                    <p>Infrared saunas are very safe. They are safer than the traditional dry sauna. However, there is still the risk of dehydration and becoming overheated, therefore we recommend to ensure proper hydration. Pregnant women should avoid using saunas as the rise in body temperature may pose a risk to the baby.</p>
                    <h3>How often should I use the sauna?</h3>
                    <p>There is no one right answer for everyone. It depends on your individual goals and needs. The more often you use the sauna, the faster you might see results. Infrared saunas are safe to use daily. Most people use the infrared sauna for 30-45 minutes 3-4 times per week.</p>
                    <h3>How do I prepare for the infrared sauna?</h3>
                    <p>Make sure you are well hydrated before and after your session. We also recommend having a light snack before your session.</p>
                </div>
            </div>
        </div>
    )
}

export default Sauna;
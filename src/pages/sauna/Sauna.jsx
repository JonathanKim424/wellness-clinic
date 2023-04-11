import React from 'react';
import './sauna.css';
import infraredSauna from '../../assets/infrared_sauna.jpg';

function Sauna() {
    return (
        <div className='wellness__sauna'>
            <img src={infraredSauna} alt='Infrared Sauna' />
            <p>Introduction Promo for contrast therapy:</p>
            <p>Infrared therapy and cold plunge</p>
            <p>$39 for 30 minutes for members</p>
            <p>$49 for 30 minutes for non-members</p>
            <p>Is it safe for me to use the infrared sauna?</p>
            <p>Infrared saunas are very safe. They are safer than the traditional dry sauna. However, there is still the risk of dehydration and becoming overheated, therefore we recommend to ensure proper hydration. Pregnant women should avoid using saunas as the rise in body temperature may pose a risk to the baby.</p>
            <p>How often should I use the sauna?</p>
            <p>There is no one right answer for everyone. It depends on your individual goals and needs. The more often you use the sauna, the faster you might see results. Infrared saunas are safe to use daily. Most people use the infrared sauna for 30-45 minutes 3-4 times per week.</p>
            <p>How do I prepare for the infrared sauna?</p>
            <p>Make sure you are well hydrated before and after your session. We also recommend having a light snack before your session.</p>
        </div>
    )
}

export default Sauna;
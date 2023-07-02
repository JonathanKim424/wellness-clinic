import React from 'react';
import './sauna.css';

function Sauna() {
    return (
        <div className='wellness__sauna'>
            <div className='wellness__sauna-header'>
                <h1>Infrared Sauna</h1>
            </div>
            <div className='wellness__sauna-info'>
                <h1>Infrared Sauna and Cold Plunge</h1>
                <div className='wellness__sauna-info-costs'>
                    <div className='wellness__sauna-info-costs_left'>
                        <p>$25 for 30 minutes for members</p>
                        <p>$230 package of ten 30 min sessions for members</p>
                    </div>
                    <div className='wellness__sauna-info-costs_right'>
                        <p>$30 for 30 minutes for non-members</p>
                        <p>$270 package of ten 30 min sessions for non-members</p>
                    </div>
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
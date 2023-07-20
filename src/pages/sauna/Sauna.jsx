import React from 'react';
import './sauna.css';
import { BookButton, Faq } from '../../components';

function Sauna() {
    const data = {
        questions: [
            "Is it safe for me to use the infrared sauna?",
            "How often should I use the sauna?",
            "How do I prepare for the infrared sauna?"
        ],
        answers: [
            "Infrared saunas are very safe. They are safer than the traditional dry sauna. However, there is still the risk of dehydration and becoming overheated, therefore we recommend to ensure proper hydration. Pregnant women should avoid using saunas as the rise in body temperature may pose a risk to the baby.",
            "There is no one right answer for everyone. It depends on your individual goals and needs. The more often you use the sauna, the faster you might see results. Infrared saunas are safe to use daily. Most people use the infrared sauna for 30-45 minutes 3-4 times per week.",
            "Make sure you are well hydrated before and after your session. We also recommend having a light snack before your session."
        ]
    }
    return (
        <div className='wellness__sauna'>
            <div className='wellness__sauna-header'>
                <h1>Infrared Sauna</h1>
            </div>
            <div className='wellness__sauna-info'>
                <BookButton />
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
                    <div className='wellness__sauna-info-text_content'>
                        <p>Infrared saunas offer a multitude of benefits for individuals seeking to enhance their health and well-being. Using infrared heat technology, these saunas penetrate deep into the body, promoting relaxation and inducing a gentle, soothing sweat. This heat therapy helps to improve circulation, detoxify the body, and boost the immune system. Regular use of infrared saunas can aid in pain relief, reduce muscle tension, and promote faster muscle recovery. In addition, the deep penetrating heat can enhance skin health by increasing collagen production and improving overall complexion. The calming and detoxifying effects of infrared saunas also contribute to stress reduction, improved sleep quality, and a sense of rejuvenation. With their gentle and efficient heat, infrared saunas provide a convenient and effective way to relax, recharge, and support your overall wellness journey.</p>
                    </div>
                    <div className='wellness__sauna-info-text_content'>
                        <h2>OUR INFRARED SAUNA PROGRAM</h2>
                        <p>The recommended use for infrared saunas can vary depending on individual needs and preferences. However, a general guideline is to start with 10 to 30 minutes at a time followed by 1-3 minutes in the cold plunge.  Alternately start your session in the infrared sauna and end your last 2-5 minutes in the cold plunge.  It's important to stay well-hydrated before, during, and after each session to support the body's detoxification process. The frequency of our sauna to cold plunge sessions can vary but starting with 2 to 3 sessions per week is a good initial approach. However, it's always recommended to consult with a healthcare professional if you have any pre-existing medical conditions or concerns before incorporating regular infrared sauna and cold plunge use into your wellness routine.</p>
                    </div>
                    <div className='wellness__sauna-info-text_content'>
                        <p>Our infrared sauna access is by 30-minute appointements only. Simply click on the Book Now button to schedule your 30-minute sessions.</p>
                    </div>
                    <div className='wellness__sauna-info-text_content'>
                        <h2>HOW TO PREPARE</h2>
                        <ul>
                            <li><p>Bring your own swimsuit</p></li>
                            <li><p>Check-in for your appointment at the front desk</p></li>
                            <li><p>Grab a towel from the front desk</p></li>
                            <li><p>RINSE OFF before using the cold plunge and infrared sauna</p></li>
                            <li><p>Don't use a temperature that is painful or uncomfortable</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Faq faqdata={ data } />
        </div>
    )
}

export default Sauna;
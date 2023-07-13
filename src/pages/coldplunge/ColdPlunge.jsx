import React from 'react';
import './coldPlunge.css';
import { book_url } from '../../index.js';

function ColdPlunge() {
    return (
        <div className='wellness__coldplunge'>
            <div className='wellness__coldplunge-header'>
                <h1>Cold Plunge</h1>
            </div>
            <div className='wellness__coldplunge-info'>
                <div className='wellness__coldplunge-info-book'>
                    <a href={book_url} target="_blank" rel="noopener noreferrer">Book Now!</a>
                </div>
                <div className='wellness__coldplunge-info-costs'>
                    <div className='wellness__coldplunge-info-costs_left'>
                        <p>$25 for 30 minutes for members</p>
                        <p>$230 package of ten 30 min sessions for members</p>
                    </div>
                    <div className='wellness__coldplunge-info-costs_right'>
                        <p>$30 for 30 minutes for non-members</p>
                        <p>$270 package of ten 30 min sessions for non-members</p>
                    </div>
                </div>
                <div className='wellness__coldplunge-info-text'>
                    <p>Cold plunges provide a wide range of benefits for individuals seeking to optimize their physical and mental well-being. By immersing oneself in cold water, often around 55&deg;F or lower, the body undergoes a powerful physiological response. Cold plunges help to increase circulation, reduce inflammation, and promote faster muscle recovery. The shock of cold water also stimulates the release of endorphins, leading to an immediate mood boost and enhanced mental clarity. Regular cold plunge therapy can improve the immune system, boost metabolism, and support weight loss goals. It can also promote better sleep, reduce stress levels, and enhance overall resilience to daily stressors. Incorporating cold plunges into your wellness routine can provide a refreshing and invigorating experience, leaving you feeling rejuvenated and energized.</p>
                    <h2>OUR COLD PLUNGE PROGRAM</h2>
                    <p>The recommended use for cold plunges can vary depending on individual preferences and goals. However, a common approach is to immerse yourself in cold water for a short duration, typically between 1 to 5 minutes, followed by a period of 5 to 10 minutes rest or recovery in our Infrared Sauna. This cycle can be repeated for up to 30 minutes, depending on your comfort level and tolerance. Alternately start your session in the infrared sauna and end your last 2 to 5 minutes in the cold plunge. It's important to listen to your body and gradually acclimate to the cold water, starting with shorter durations and gradually increasing as you become more accustomed to it. Some people choose to incorporate cold plunges into their post-workout routine to aid in muscle recovery, while others may use it as a regular part of their wellness regimen for its energizing and mood-enhancing effects. Ultimately, the frequency and duration of colg plunge sessions should be tailored to your individual needs and tolerance levels.</p>
                    <p>Our cold plunge access is by 30-minute appointments only. Simply click the Book Now button to schedule your 30-minute sessions.</p>
                    <h2>HOW TO PREPARE</h2>
                    <ul>
                        <li><p>Bring your own swimsuit, to wear</p></li>
                        <li><p>Check-in for your appointment at the front desk</p></li>
                        <li><p>Grab a towel at the front desk</p></li>
                        <li><p>RINSE OFF before using the cold plunge and infrared sauna</p></li>
                        <li><p>Don't use a temperature that is painful or comfortable (keep above 50&deg;F)</p></li>
                        <li><p>Let us know if you want to change the temperature</p></li>
                        <li><p>Don't force yourself to stay in too long (we recommend no more than 2-5 min at a time)</p></li>
                    </ul>
                </div>
                <div className='wellness__coldplunge-info-footer'>
                    <h1>FAQ</h1>
                    <h3>Benefits of Cold Plunge:</h3>
                    <ul>
                        <li><p>Boost immunity, boost metabolism, reduce chronic pain</p></li>
                        <li><p>Improve sleep, improve mood, boost energy</p></li>
                        <li><p>Enhance performance and recovery after a workout</p></li>
                    </ul>
                    <h3>How cold is it?</h3>
                    <p>We keep it at 50&deg;F - 55&deg;F but you can make requests to make it colder. We recommend not starting at a lower temperature if you are not accustomed.</p>
                    <h3>How often can I use the cold plunge?</h3>
                    <p>Cold plunges are fairly safe and can be used daily. We recommend starting three times a week and check out how you feel!</p>
                </div>
            </div>
        </div>
    )
}

export default ColdPlunge;
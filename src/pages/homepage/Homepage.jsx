import React from 'react';
import './homepage.css';

function Homepage() {
    return (
        <div className='wellness__homepage'>
            <div className='wellness__homepage-header'>
                <h1>Welcome to Circuit Works Wellness</h1>
                <h3>We are offering vitamin injections, IV therapy, cold plunge and infrared therapy</h3>
            </div>
            <div className='wellness__homepage-services'>
                <div className='wellness__homepage-services-suana'>
                    <h2>Introduction promo for contrast therapy</h2>
                    <div className='wellness__homepage-services-sauna_body'>
                        <div className='wellness__homepage-services-sauna_body-left'>
                            <p>Infrared therapy and cold plunge</p>
                        </div>
                        <div className='wellness__homepage-services-sauna_body-right'>
                            <p>$39 for 30 minutes for members</p>
                            <p>$49 for 30 minutes for non-members</p>
                        </div>
                    </div>
                    <div className='wellness__homepage-services-sauna_header'>
                        <h1>Infrared Sauna</h1>
                    </div>
                    <div className='wellness__homepage-services-sauna_footer'>
                        <h2>Is it safe for me to use the infrared sauna?</h2>
                        <p>Infrared saunas are very safe. They are safer than the traditional dry sauna. However, there is still the risk of dehydration and becoming overheated, therefore we recommend to ensure proper hydration. Pregnant women should avoid using saunas as the rise in body temperature may pose a risk to the baby.</p>
                        <h2>How often should I use the sauna?</h2>
                        <p>There is no right answer for everyone. It depends on your individual goals and needs. The more often you use the sauna, the faster you might see results. Infrared saunas are safe to use daily. Most people use the infrared sauna for 30-45 minutes 3-4 times per week.</p>
                        <h2>How do I prepare for the infrared sauna?</h2>
                        <p>Make sure you are well hydrated before and after your session. We also recommend having a light snack before your session.</p>
                    </div>
                </div>
                <div className='wellness__homepage-services-cold'>
                    <div className='wellness__homepage-services-cold_header'>
                        <h1>Cold Plunge</h1>
                    </div>
                    {/* <div className='wellness__homepage-services-cold_body'>
                        <p>1 session (15 minutes) $30</p>
                        <p>Package of 5 cold plunge sessions: $135 ($27/session)</p>
                        <p>Package of 10 cold plunge sessions: $250 ($25/session)</p>
                        <br></br>
                        <p>Cold plunge +  Infrared packages:</p>
                        <p>Go back and forth between the infrared sauna and cold plunge for contrast therapy.</p>
                        <p>Each session is 30 minutes total.</p>
                        <p>Package of 5 sessions: $325 ($65/session)</p>
                        <p>Package of 10 sessions: $600 ($60/session)</p>
                    </div> */}
                    <div className='wellness__homepage-services-cold_footer'>
                        <div className='wellness__homepage-services-cold_footer-left'>
                            <h2>Benefits of Cold Plunge</h2>
                            <ul>
                                <li><p>Boost immunity, boost metabolism, reduce chronic pain</p></li>
                                <li><p>Improve sleep, improve mood, boost energy</p></li>
                                <li><p>Enhance performance and recovery after a workout</p></li>
                            </ul>
                        </div>
                        <div className='wellness__homepage-services-cold_footer-right'>
                            <h2>FAQs</h2>
                            <ol>
                                <li>
                                    <h3>How cold is it?</h3>
                                    <p>We keep it at 50-55F but you can make requests to make it colder. We recommend not starting at a lower temperature if you are not accustomed.</p>
                                </li>
                                <li>
                                    <h3>How often can I use the cold plunge?</h3>
                                    <p>Cold plunges are fairly safe and can be used daily. We recommend starting three times a week and check out how you feel!</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <h1>IV Therapy/Vitamin Injections</h1>
            </div>
        </div>
    )
}

export default Homepage;
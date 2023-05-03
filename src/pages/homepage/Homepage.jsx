import React from 'react';
import './homepage.css';
import { book_url } from '../../index.js';

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
                <div className='wellness__homepage-services-iv'>
                    <div className='wellness__homepage-services-iv_header'>
                        <h1>IV Therapy/Vitamin Injections</h1>
                    </div>
                    <div className='wellness__homepage-services-iv_body'>
                        <div className='wellness__homepage-services-iv_body-vitamins'>
                            <h2>Vitamin Bar</h2>
                            <h3>Our Blends:</h3>
                            <div className='wellness__homepage-services-iv_body-content'>
                                <div className='wellness__homepage-services-iv_body-content_header'>
                                    <div className='wellness__homepage-services-iv_body-content_header-left'>
                                        <h3>Athletic Support</h3>
                                    </div>
                                    <div className='wellness__homepage-services-iv_body-content_header-right'>
                                        <h3>$75</h3>
                                    </div>
                                </div>
                                <div className='wellness__homepage-services-iv_body-content_body'>
                                    <p>A blend of amino acids and nutrients to enhance muscle building, increase fat metabolism and boost athletic performance</p>
                                </div>
                                <div className='wellness__homepage-services-iv_body-content_header'>
                                    <div className='wellness__homepage-services-iv_body-content_header-left'>
                                        <h3>Recovery</h3>
                                    </div>
                                    <div className='wellness__homepage-services-iv_body-content_header-right'>
                                        <h3>$60</h3>
                                    </div>
                                </div>
                                <div className='wellness__homepage-services-iv_body-content_body'>
                                    <p>B vitamins and electrolytes to help you recover after that stellar workout</p>
                                </div>
                                <div className='wellness__homepage-services-iv_body-content_header'>
                                    <div className='wellness__homepage-services-iv_body-content_header-left'>
                                        <h3>Brain Sharpener</h3>
                                    </div>
                                    <div className='wellness__homepage-services-iv_body-content_header-right'>
                                        <h3>$115</h3>
                                    </div>
                                </div>
                                <div className='wellness__homepage-services-iv_body-content_body'>
                                    <p>Support your brain with NAD and B vitamins</p>
                                </div>
                                <div className='wellness__homepage-services-iv_body-content_header'>
                                    <div className='wellness__homepage-services-iv_body-content_header-left'>
                                        <h3>Chill Out</h3>
                                    </div>
                                    <div className='wellness__homepage-services-iv_body-content_header-right'>
                                        <h3>$70</h3>
                                    </div>
                                </div>
                                <div className='wellness__homepage-services-iv_body-content_body'>
                                    <p>Blend of amino acids and electrolytes to help relax your mind and body</p>
                                </div>
                                <div className='wellness__homepage-services-iv_body-content_header'>
                                    <div className='wellness__homepage-services-iv_body-content_header-left'>
                                        <h3>Skin Support</h3>
                                    </div>
                                    <div className='wellness__homepage-services-iv_body-content_header-right'>
                                        <h3>$60</h3>
                                    </div>
                                </div>
                                <div className='wellness__homepage-services-iv_body-content_body'>
                                    <p>Concoction of vitamins and minerals to support your hair, skin and nails</p>
                                </div>
                            </div>
                            <div className='wellness__homepage-services-iv_body-content_footer'>
                                <h3>Single Shots</h3>
                                <div className='wellness__homepage-services-iv_body-content_footer-body'>
                                    <div className='wellness__homepage-services-iv_body-content_footer-body_left'>
                                        <p>Vitmain C</p>
                                        <p>Vitamin B12</p>
                                        <p>Glutathione</p>
                                        <p>NAD</p>
                                    </div>
                                    <div className='wellness__homepage-services-iv_body-content_footer-body_right'>
                                        <p>$35</p>
                                        <p>$35</p>
                                        <p>$60</p>
                                        <p>$95</p>
                                    </div>
                                </div>
                            </div>
                            <div className='wellness__homepage-services-iv_body-iv'>
                                <h2>IV Therapy</h2>
                                <h3>Our Cocktails:</h3>
                                <div className='wellness__homepage-services-iv_body-content'>
                                    <div className='wellness__homepage-services-iv_body-content_header'>
                                        <div className='wellness__homepage-services-iv_body-content_header-left'>
                                            <h3>Myers Cocktail</h3>
                                        </div>
                                        <div className='wellness__homepage-services-iv_body-content_header-right'>
                                            <h3>$199</h3>
                                        </div>
                                    </div>
                                    <div className='wellness__homepage-services-iv_body-content_body'>
                                        <p>The classic cocktail with B vitamins, vitamin C and minerals for energy and well rounded support</p>
                                    </div>
                                    <div className='wellness__homepage-services-iv_body-content_header'>
                                        <div className='wellness__homepage-services-iv_body-content_header-left'>
                                            <h3>Hangover Remedy</h3>
                                        </div>
                                        <div className='wellness__homepage-services-iv_body-content_header-right'>
                                            <h3>$175</h3>
                                        </div>
                                    </div>
                                    <div className='wellness__homepage-services-iv_body-content_body'>
                                        <p>Get perked back up after that crazy night</p>
                                    </div>
                                    <div className='wellness__homepage-services-iv_body-content_header'>
                                        <div className='wellness__homepage-services-iv_body-content_header-left'>
                                            <h3>Athletic Recovery</h3>
                                        </div>
                                        <div className='wellness__homepage-services-iv_body-content_header-right'>
                                            <h3>$175</h3>
                                        </div>
                                    </div>
                                    <div className='wellness__homepage-services-iv_body-content_body'>
                                        <p>B vitamins, electrolytes and some extra hydration to help you recover after that stellar workout</p>
                                    </div>
                                    <div className='wellness__homepage-services-iv_body-content_header'>
                                        <div className='wellness__homepage-services-iv_body-content_header-left'>
                                            <h3>Brain Sharpener</h3>
                                        </div>
                                        <div className='wellness__homepage-services-iv_body-content_header-right'>
                                            <h3>$225</h3>
                                        </div>
                                    </div>
                                    <div className='wellness__homepage-services-iv_body-content_body'>
                                        <p>Support your brain with NAD and B vitamins</p>
                                    </div>
                                    <div className='wellness__homepage-services-iv_body-content_header'>
                                        <div className='wellness__homepage-services-iv_body-content_header-left'>
                                            <h3>Chill Out</h3>
                                        </div>
                                        <div className='wellness__homepage-services-iv_body-content_header-right'>
                                            <h3>$175</h3>
                                        </div>
                                    </div>
                                    <div className='wellness__homepage-services-iv_body-content_body'>
                                        <p>Relax your mind and your body with these amino acids and vitamins</p>
                                    </div>
                                    <div className='wellness__homepage-services-iv_body-content_header'>
                                        <div className='wellness__homepage-services-iv_body-content_header-left'>
                                            <h3>Skin Support</h3>
                                        </div>
                                        <div className='wellness__homepage-services-iv_body-content_header-right'>
                                            <h3>$175</h3>
                                        </div>
                                    </div>
                                    <div className='wellness__homepage-services-iv_body-content_body'>
                                        <p>Concoction of vitamins and minerals to support your hair, skin and nails</p>
                                    </div>
                                </div>
                            </div>
                            <div className='wellness__homepage-services-iv_body-content_footer'>
                                <h3>IV Boosters</h3>
                                <div className='wellness__homepage-services-iv_body-content_footer-body'>
                                    <div className='wellness__homepage-services-iv_body-content_footer-body_left'>
                                        <p>Vitmain C</p>
                                        <p>Glutathione</p>
                                        <p>NAD</p>
                                    </div>
                                    <div className='wellness__homepage-services-iv_body-content_footer-body_right'>
                                        <p>$80</p>
                                        <p>$175</p>
                                        <p>$185</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='wellness__homepage-services-iv_footer'>
                        <div className='wellness__homepage-services-iv_footer-text'>
                            <p>We, at Circuit Works Wellness, want to ensure your safety with all our treatments. We require lab work (within the past 6 months) prior to receiving any IV therapy or vitamin injections. You are welcome to provide lab work done with your primary doctor/outside facility or you can schedule lab work to be done with us. If you want to schedule lab work, please click on the provided link below and come fasting (nothing to eat or drink except for water, coffee or tea without cream or sugar after midnight).</p>
                            <h2>Why do I need lab work?</h2>
                            <p>We want to make sure your body can support the amount of fluid you will receive and you are able to clear out byproducts normally. We may need to adjust the rate that you receive fluid based on your kidney function. It will allow us to determine what nutrients are safe to administer. It is also a great way to monitor your health progress!</p>
                            <h2>Why get IV therapy?</h2>
                            <p>There are several reasons to get IV therapy. One, it is the quickest way for your body to receive these nutrients. It is also more effective. Many vitamins lose much of their bioavailability when taken orally.  Some may think that vitamins and nutrients are better to obtain through food, which can be true. However, these days the amount of micronutrients and vitamins in our crops have declined.1  Many may benefit from intravenous supplementation because their gut microbiome prevents adequate absorption of oral intake of nutrients.</p>
                            <h2>Is intravenous safe?</h2>
                            <p>There is a small risk given that it is a needle puncture. We follow sanitary procedures to minimize even the small risks. We never use expired products and assess our prepared bag and syringes for safety prior to administration.</p>
                        </div>
                        <div className='wellness__homepage-services-iv_footer-book'>
                            <a href={book_url} target="_blank" rel="noopener noreferrer">Book Now!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
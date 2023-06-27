import React, { useLayoutEffect } from 'react';
import './vitaminIvTherapy.css';
import image from '../../assets/iv_therapy.jpg';

function VitaminIvTherapy() {
    useLayoutEffect(() => window.scrollTo(0,0));
    return (
        <div className='wellness__iv'>
            <div className='wellness__iv-header' style={{ backgroundImage: `url(${image})`}}>
                <h1>IV Therapy/Vitamin Injections</h1>
            </div>
            <div className='wellness__iv-info'>
			    <div className='wellness__iv-info_body'>
                    <h1>IV Therapy and Vitamin Injections</h1>
                    <div className='wellness__iv-info_body-vitamins'>
                        <h2>Vitamin Bar</h2>
                        <h3>Our Blends:</h3>
                        <div className='wellness__iv-info_body-content'>
                            <div className='wellness__iv-info_body-content_header'>
                                <div className='wellness__iv-info_body-content_header-left'>
                                    <h3>Athletic Support</h3>
                                </div>
                                <div className='wellness__iv-info_body-content_header-right'>
                                    <h3>$75</h3>
                                </div>
                            </div>
                            <div className='wellness__iv-info_body-content_body'>
                                <p>A blend of amino acids and nutrients to enhance muscle building, increase fat metabolism and boost athletic performance</p>
                            </div>
                            <div className='wellness__iv-info_body-content_header'>
                                <div className='wellness__iv-info_body-content_header-left'>
                                    <h3>Recovery</h3>
                                </div>
                                <div className='wellness__iv-info_body-content_header-right'>
                                    <h3>$60</h3>
                                </div>
                            </div>
                            <div className='wellness__iv-info_body-content_body'>
                                <p>B vitamins and electrolytes to help you recover after that stellar workout</p>
                            </div>
                            <div className='wellness__iv-info_body-content_header'>
                                <div className='wellness__iv-info_body-content_header-left'>
                                    <h3>Brain Sharpener</h3>
                                </div>
                                <div className='wellness__iv-info_body-content_header-right'>
                                    <h3>$115</h3>
                                </div>
                            </div>
                            <div className='wellness__iv-info_body-content_body'>
                                <p>Support your brain with NAD and B vitamins</p>
                            </div>
                            <div className='wellness__iv-info_body-content_header'>
                                <div className='wellness__iv-info_body-content_header-left'>
                                    <h3>Chill Out</h3>
                                </div>
                                <div className='wellness__iv-info_body-content_header-right'>
                                    <h3>$70</h3>
                                </div>
                            </div>
                            <div className='wellness__iv-info_body-content_body'>
                                <p>Blend of amino acids and electrolytes to help relax your mind and body</p>
                            </div>
                            <div className='wellness__iv-info_body-content_header'>
                                <div className='wellness__iv-info_body-content_header-left'>
                                    <h3>Skin Support</h3>
                                </div>
                                <div className='wellness__iv-info_body-content_header-right'>
                                    <h3>$60</h3>
                                </div>
                            </div>
                            <div className='wellness__iv-info_body-content_body'>
                                <p>Concoction of vitamins and minerals to support your hair, skin and nails</p>
                            </div>
                        </div>
                        <div className='wellness__iv-info_body-content_footer'>
                            <h3>Single Shots</h3>
                            <div className='wellness__iv-info_body-content_footer-body'>
                                <div className='wellness__iv-info_body-content_footer-body_left'>
                                    <p>Vitmain C</p>
                                    <p>Vitamin B12</p>
                                    <p>Glutathione</p>
                                    <p>NAD</p>
                                </div>
                                <div className='wellness__iv-info_body-content_footer-body_right'>
                                    <p>$35</p>
                                    <p>$35</p>
                                    <p>$60</p>
                                    <p>$95</p>
                                </div>
                            </div>
                        </div>
                        <div className='wellness__iv-info_body-iv'>
                            <h2>IV Therapy</h2>
                            <h3>Our Cocktails:</h3>
                            <div className='wellness__iv-info_body-content'>
                                <div className='wellness__iv-info_body-content_header'>
                                    <div className='wellness__iv-info_body-content_header-left'>
                                        <h3>Myers Cocktail</h3>
                                    </div>
                                    <div className='wellness__iv-info_body-content_header-right'>
                                        <h3>$199</h3>
                                    </div>
                                </div>
                                <div className='wellness__iv-info_body-content_body'>
                                    <p>The classic cocktail with B vitamins, vitamin C and minerals for energy and well rounded support</p>
                                </div>
                                <div className='wellness__iv-info_body-content_header'>
                                    <div className='wellness__iv-info_body-content_header-left'>
                                        <h3>Hangover Remedy</h3>
                                    </div>
                                    <div className='wellness__iv-info_body-content_header-right'>
                                        <h3>$175</h3>
                                    </div>
                                </div>
                                <div className='wellness__iv-info_body-content_body'>
                                    <p>Get perked back up after that crazy night</p>
                                </div>
                                <div className='wellness__iv-info_body-content_header'>
                                    <div className='wellness__iv-info_body-content_header-left'>
                                        <h3>Athletic Recovery</h3>
                                    </div>
                                    <div className='wellness__iv-info_body-content_header-right'>
                                        <h3>$125</h3>
                                    </div>
                                </div>
                                <div className='wellness__iv-info_body-content_body'>
                                    <p>B vitamins, electrolytes and some extra hydration to help you recover after that stellar workout</p>
                                </div>
                                <div className='wellness__iv-info_body-content_header'>
                                    <div className='wellness__iv-info_body-content_header-left'>
                                        <h3>Brain Sharpener</h3>
                                    </div>
                                    <div className='wellness__iv-info_body-content_header-right'>
                                        <h3>$225</h3>
                                    </div>
                                </div>
                                <div className='wellness__iv-info_body-content_body'>
                                    <p>Support your brain with NAD and B vitamins</p>
                                </div>
                                <div className='wellness__iv-info_body-content_header'>
                                    <div className='wellness__iv-info_body-content_header-left'>
                                        <h3>Chill Out</h3>
                                    </div>
                                    <div className='wellness__iv-info_body-content_header-right'>
                                        <h3>$175</h3>
                                    </div>
                                </div>
                                <div className='wellness__iv-info_body-content_body'>
                                    <p>Relax your mind and your body with these amino acids and vitamins</p>
                                </div>
                                <div className='wellness__iv-info_body-content_header'>
                                    <div className='wellness__iv-info_body-content_header-left'>
                                        <h3>Skin Support</h3>
                                    </div>
                                    <div className='wellness__iv-info_body-content_header-right'>
                                        <h3>$175</h3>
                                    </div>
                                </div>
                                <div className='wellness__iv-info_body-content_body'>
                                    <p>Concoction of vitamins and minerals to support your hair, skin and nails</p>
                                </div>
                            </div>
                        </div>
                        <div className='wellness__iv-info_body-content_footer'>
                            <h3>IV Boosters</h3>
                            <div className='wellness__iv-info_body-content_footer-body'>
                                <div className='wellness__iv-info_body-content_footer-body_left'>
                                    <p>Vitmain C</p>
                                    <p>Glutathione</p>
                                    <p>NAD</p>
                                </div>
                                <div className='wellness__iv-info_body-content_footer-body_right'>
                                    <p>$80</p>
                                    <p>$175</p>
                                    <p>$185</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='wellness__iv-info_labs'>
                    <h1>Labs</h1>
                    <p>Basic labs</p>
                    <p>Comprehensive lab with micronutrients</p>
                </div>
                <div className='wellness__iv-info_lower'>
                    <p>We, at Circuit Works Wellness, want to ensure your safety with all our treatments. We require lab work (within the past 6 months) prior to receiving any IV therapy or vitamin injections. You are welcome to provide lab work done with your primary doctor/outside facility or you can schedule lab work to be done with us. If you want to schedule lab work, please click on the provided link below and come fasting (nothing to eat or drink except for water, coffee or tea without cream or sugar after midnight).</p>
                    <h2>Why do I need lab work?</h2>
                    <p>We want to make sure your body can support the amount of fluid you will receive and you are able to clear out byproducts normally. We may need to adjust the rate that you receive fluid based on your kidney function. It will allow us to determine what nutrients are safe to administer. It is also a great way to monitor your health progress!</p>
                    <h2>Why get IV therapy?</h2>
                    <p>There are several reasons to get IV therapy. One, it is the quickest way for your body to receive these nutrients. It is also more effective. Many vitamins lose much of their bioavailability when taken orally. Some may think that vitamins and nutrients are better to obtain through food, which can be true. However, these days the amount of micronutrients and vitamins in our crops have declined. Many may benefit from intravenous supplementation because their gut microbiome prevents adequate absorption of oral intake of nutrients.</p>
                    <h2>Is intravenous safe?</h2>
                    <p>There is a small risk given that it is a needle puncture. We follow sanitary procedures to minimize even the small risks. We never use expired products and assess our prepared bag and syringes for safety prior to administration.</p>
                </div>
            </div>
        </div>
    )
}

export default VitaminIvTherapy;
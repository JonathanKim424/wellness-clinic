import React from 'react';
import './services.css';
import { IvBlendCocktail } from '../../components';

function Services() {
    return (
        <div className='wellness__services'>
            <div className='wellness__services-header'>
                <h1>Welcome to Circuit Works Wellness</h1>
                <h3>We are offering vitamin injections, IV therapy, lab work, cold plunge and infrared therapy</h3>
            </div>
            <div className='wellness__services-services'>
                <div className='wellness__services-services-suana'>
                    <h1>Infrared Sauna and Cold Plunge</h1>
                    <p>$25 for 30 minutes for members</p>
                    <p>$30 for 30 minutes for non-members</p>
                    <p>$230 package of ten 30 min sessions for members</p>
                    <p>$270 package of ten 30 min sessions for non-members</p>
                </div>
                <div className='wellness__services-services-iv'>
                    <div className='wellness__services-services-iv_header'>
                        <h1>IV Therapy and Vitamin Injections</h1>
                    </div>
                    <div className='wellness__services-services-iv_body'>
                        <div className='wellness__services-services-iv_body-vitamins'>
                            <h2>Vitamin Bar</h2>
                            <h3>Our Blends:</h3>
                            <div className='wellness__services-services-iv_body-content'>
                                <IvBlendCocktail
                                    name="Athletic Support"
                                    description="A blend of amino acids and nutrients to enhance muscle building, increase fat metabolism and boost athletic performance"
                                    price="$75"
                                />
                                <IvBlendCocktail
                                    name="Recovery"
                                    description="B vitamins and electrolytes to help you recover after that stellar workout"
                                    price="$60"
                                />
                                <IvBlendCocktail
                                    name="Brain Sharpener"
                                    description="Support your brain with NAD and B vitamins"
                                    price="$115"
                                />
                                <IvBlendCocktail
                                    name="Chill Out"
                                    description="Blend of amino acids and electrolytes to help relax your mind and body"
                                    price="$70"
                                />
                                <IvBlendCocktail
                                    name="Skin Support"
                                    description="Concoction of vitamins and minerals to support your hair, skin and nails"
                                    price="$60"
                                />
                                <div className='wellness__services-services-iv_body-content_footer'>
                                    <h3>Single Shots</h3>
                                    <div className='wellness__services-services-iv_body-content_footer-body'>
                                        <div className='wellness__services-services-iv_body-content_footer-body_left'>
                                            <p>Vitmain C</p>
                                            <p>Vitamin B12</p>
                                            <p>Glutathione</p>
                                            <p>NAD</p>
                                        </div>
                                        <div className='wellness__services-services-iv_body-content_footer-body_right'>
                                            <p>$35</p>
                                            <p>$35</p>
                                            <p>$60</p>
                                            <p>$95</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='wellness__services-services-iv_body-iv'>
                                <h2>IV Therapy</h2>
                                <h3>Our Cocktails:</h3>
                                <div className='wellness__services-services-iv_body-content'>
                                    <IvBlendCocktail
                                            name="Myers Cocktail"
                                            description="The classic cocktail with B vitamins, vitamin C and minerals for energy and well rounded support"
                                            price="$199"
                                    />
                                    <IvBlendCocktail
                                            name="Hangover Remedy"
                                            description="Get perked back up after that crazy night"
                                            price="$175"
                                    />
                                    <IvBlendCocktail
                                            name="Athletic Recovery"
                                            description="B vitamins, electrolytes and some extra hydration to help you recover after that stellar workout"
                                            price="$125"
                                    />
                                    <IvBlendCocktail
                                            name="Brain Sharpener"
                                            description="Support your brain with NAD and B vitamins"
                                            price="$225"
                                    />
                                    <IvBlendCocktail
                                            name="Chill Out"
                                            description="Relax your mind and your body with these amino acids and vitamins"
                                            price="$175"
                                    />
                                    <IvBlendCocktail
                                            name="Skin Support"
                                            description="Concoction of vitamins and minerals to support your hair, skin and nails"
                                            price="$175"
                                    />
                                    <div className='wellness__services-services-iv_body-content_footer'>
                                        <h3>IV Boosters</h3>
                                        <div className='wellness__services-services-iv_body-content_footer-body'>
                                            <div className='wellness__services-services-iv_body-content_footer-body_left'>
                                                <p>Vitmain C</p>
                                                <p>Glutathione</p>
                                                <p>NAD</p>
                                            </div>
                                            <div className='wellness__services-services-iv_body-content_footer-body_right'>
                                                <p>$80</p>
                                                <p>$175</p>
                                                <p>$185</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
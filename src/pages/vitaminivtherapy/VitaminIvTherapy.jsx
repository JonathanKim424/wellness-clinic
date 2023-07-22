import React from 'react';
import './vitaminIvTherapy.css';
import { BookButton, Faq, IvBlendCocktail } from '../../components';

function VitaminIvTherapy() {
    const data = {
        questions: [
            "Why get IV therapy?",
            "Is intravenous safe?",
            "How often should I get IV therapy?",
            "How long does it take?"
        ],
        answers: [
            "There are several reasons to get IV therapy. One, it is the quickest way for your body to receive these nutrients. It is also more effective. Many vitamins lose much of their bioavailability when taken orally. Some may think that vitamins and nutrients are better to obtain through food, which can be true. However, these days the amount of micronutrients and vitamins in our crops have declined. Many may benefit from intravenous supplementation because their gut microbiome prevents adequate absorption of oral intake of nutrients.",
            "There is a small risk given that it is a needle puncture. We follow sanitary procedures to minimize even the small risks. We never use expired products and assess our prepared bag and syringes for safety prior to administration.",
            "We recommend no more than twice a week.",
            "Most of our IV bags take less than 30 minutes. If you are getting an extra hydration bag, it can take up to 45 minutes."
        ]
    };
    return (
        <div className='wellness__iv'>
            <div className='wellness__iv-header'>
                <h1>IV Therapy/Vitamin Injections</h1>
            </div>
            <div className='wellness__iv-info'>
			    <div className='wellness__iv-info_body'>
                    <div className='wellness__iv-info_body-vitamins'>
                        <h2>Vitamin Bar</h2>
                        <h3>Our Blends:</h3>
                        <div className='wellness__iv-info_body-content'>
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
                        </div>
                        <div className='wellness__iv-info_body-iv'>
                            <h2>IV Therapy</h2>
                            <h3>Our Cocktails:</h3>
                            <div className='wellness__iv-info_body-content'>
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
                    </div>
                </div>
                <div className='wellness__iv-info_book'>
                    <BookButton />
                </div>
            </div>
            <Faq faqdata={ data } />
        </div>
    )
}

export default VitaminIvTherapy;
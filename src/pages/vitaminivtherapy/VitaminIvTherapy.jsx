import React from 'react';
import './vitaminIvTherapy.css';
import image from '../../assets/iv_therapy.jpg';

function VitaminIvTherapy() {
    return (
        <div className='wellness__vitaminivtherapy'>
            <div className='wellness__vitaminivtherapy-img'>
                <img src={image} alt='IV Therapy & Vitamin Injection' />
            </div>
            <div className='wellness__vitaminivtherapy-text'>
                <p>Vitamin Bar</p>
                <p>Our Blends:</p>
                <p>Athletic Support (A blend of amino acids and nutrients to enhance muscle building, increase fat metabolism and boost athletic performance) $75</p>
                <p>Recovery (B vitamins and electrolytes to help you recover after that stellar workout) $60</p>
                <p>Brain Sharpener (Support your brain with NAD and B vitamins) $115</p>
                <p>Chill Out (Blend of amino acids and electrolytes to help relax your mind and body) $70</p>
                <p>Skin Support (Concoction of vitamins and minerals to support your hair, skin and nails) $60</p>
                <p>Single Shots $35</p>
                <p>Vitamin C $35</p>
                <p>Vitamin B12 $60</p>
                <p>Glutathione $60</p>
                <p>NAD $95</p>
                <p>IV Therapy</p>
                <p>Our cocktails:</p>
                <p>Myers Cocktail (The classic cocktail with B vitamins, Vitamin C and minerals-energizing and well rounded support) $199</p>
                <p>Hangover Remedy (Get perked back up after that crazy night) $175</p>
                <p>Athletic Recovery (B vitamins, electrolytes and some extra hydration to help you recover after that stellar workout) $125</p>
                <p>Brain Sharpener (Support your brain with NAD and B vitamins) $225</p>
                <p>Chill Out (Relax your mind and your body with these amino acids and vitamins) $175</p>
                <p>Skin Support (Concoction of vitamins and minerals to support your hair, skin and nails) $175</p>
                <p>IV Boosters</p>
                <p>Vitamin C $80</p>
                <p>Glutathione $175</p>
                <p>NAD $185</p>
                <p>We, at Circuit Works Wellness, want to ensure your safety with all our treatments. We require lab work (within the past 6 months) prior to receiving any IV therapy or vitamin injections. You are welcome to provide lab work done with your primary doctor/outside facility or you can schedule lab work to be done with us. If you want to schedule lab work, please click on the provided link below and come fasting (nothing to eat or drink except for water, coffee or tea without cream or sugar after midnight).</p>
                <p>Why do I need lab work?</p>
                <p>We want to make sure your body can support the amount of fluid you will receive and you are able to clear out byproducts normally. We may need to adjust the rate that you receive fluid based on your kidney function. It will allow us to determine what nutrients are safe to administer. It is also a great way to monitor your health progress!</p>
                <p>Why get IV therapy?</p>
                <p>There are several reasons to get IV therapy. One, it is the quickest way for your body to receive these nutrients. It is also more effective. Many vitamins lose much of their bioavailability when taken orally. Some may think that vitamins and nutrients are better to obtain through food, which can be true. However, these days the amount of micronutrients and vitamins in our crops have declined. Many may benefit from intravenous supplementation because their gut microbiome prevents adequate absorption of oral intake of nutrients.</p>
                <p>Is intravenous safe?</p>
                <p>There is a small risk given that it is a needle puncture. We follow sanitary procedures to minimize even the small risks. We never use expired products and assess our prepared bag and syringes for safety prior to administration.</p>
            </div>
        </div>
    )
}

export default VitaminIvTherapy;
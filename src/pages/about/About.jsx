import React from 'react';
import './about.css';
import profile from '../../assets/profile.jpg';

function About() {
    return (
        <div className='wellness__about'>
            <div className='wellness__about-headshot'>
                <img src={profile} alt="Profile" />
            </div>
            <div className='wellness__about-text'>
                <p>
                    Dr. Christine Kim completed her residency at
                    Cedars-Sinai Medical Center and is board certified
                    in Internal Medicine. She also has a certification
                    in IV Nutrient Therapy. Having always been
                    passionate about preventative care and wellness,
                    Dr. Kim is trained in Integrative Medicine and has
                    a strong interest in obesity medicine.
                </p>
            </div>
        </div>
    )
}

export default About;
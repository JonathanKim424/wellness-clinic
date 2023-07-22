import React from 'react';
import './ivBlendCocktail.css';

function IvBlendCocktail(props) {
    return (
        <div className='wellness__ivblendcocktail'>
            <div className='wellness__ivblendcocktail-left'>
                <div className='wellness__ivblendcocktail-left_name'>
                    <h3>{props.name}</h3>
                </div>
                <div className='wellness__ivblendcocktail-left_description'>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className='wellness__ivblendcocktail-right'>
                <h3>{props.price}</h3>
            </div>
        </div>
    )
}

export default IvBlendCocktail;
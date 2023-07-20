import React from 'react';
import './bookButton.css';
import { book_url } from '../../index.js';

function BookButton() {
    return (
        <div className='wellness__bookbutton'>
            <a href={book_url} target="_blank" rel="noopener noreferrer">Book Now!</a>
        </div>
    )
}

export default BookButton;
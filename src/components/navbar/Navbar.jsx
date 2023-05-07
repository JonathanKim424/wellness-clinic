import React, { useState, useEffect, useRef } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { book_url } from '../../index.js';
import logo from '../../assets/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef(null);
    
    const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    return { ref, isComponentVisible, setIsComponentVisible };
}


const Menu = () => (
    <>
        <div>
            <Link as={Link} to="/"><span>Services</span></Link>
        </div>
        <div>
            <Link as={Link} to="/about"><span>About</span></Link>
        </div>
        <div>
            <Link as={Link} to="/contact"><span>Contact</span></Link>
        </div>
    </>
)

const Navbar = () => {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    return (
        <div className='wellness__navbar'>
            <div className='wellness__navbar-links'>
                <div className='wellness__navbar-links_logo'>
                    <Link as={Link} to="/"><img src={logo} alt='logo' /></Link>
                </div>
                <div className='wellness__navbar-links_container'>
                    <Menu />
                </div>
                <div className='wellness__navbar-links_book'>
                    <a href={book_url} target="_blank" rel="noopener noreferrer">Book!</a>
                </div>
            </div>
            <div className='wellness__navbar-menu' ref={ref}>
                {isComponentVisible
                    ? <RiCloseLine color='#1051A6E8' size={27} onClick={() => setIsComponentVisible(false)} />
                    : <RiMenu3Line color='#1051A6E8' size={27} onClick={() => setIsComponentVisible(true)} />
                }
                {isComponentVisible && (
                    <div className='wellness__navbar-menu_container scale-up-center'>
                        <div className='wellness__navbar-menu_container-links'>
                            <Menu />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { book_url } from '../../index.js';
import logo from '../../assets/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

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
    const [toggleMenu, setToggleMenu] = useState(false);
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
            <div className='wellness__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='#1051A6E8' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#1051A6E8' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
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
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { book_url } from '../../index.js';
import logo from '../../assets/logo.png';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Menu = () => (
    <>
        <div className='wellness__navbar-links_container_services'>
            <div className='wellness__navbar-links_container_services-tag'>
                <Link as={Link} to="/#services"><span>Services</span></Link>
            </div>
            <div className='wellness__navbar-links_container-services'>
                <ServiceMenu />
            </div>
        </div>
        <div>
            <Link as={Link} to="/about"><span>About</span></Link>
        </div>
        <div>
            <Link as={Link} to="/contact"><span>Contact</span></Link>
        </div>
    </>
)

const ServiceMenu = () => (
    <>
        <Link as={Link} to="/sauna"><p>Infrared Sauna</p></Link>
        <Link as={Link} to="/coldplunge"><p>Cold Plunge</p></Link>
        <Link as={Link} to="/vitaminivtherapy"><p>IV Therapy/Vitamin Injections</p></Link>
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
                        <div className='wellness__navbar-menu_container-links' onClick={() => setToggleMenu(false)}>
                            <Menu />
                        </div>
                    </div>    
                )}
            </div>
        </div>
    )
}

export default Navbar
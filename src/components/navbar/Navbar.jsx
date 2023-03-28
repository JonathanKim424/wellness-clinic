import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Menu = () => (
    <>
        <Link as={Link} to="/services"><span>Services</span></Link>
        <Link as={Link} to="/pricing"><span>Pricing</span></Link>
        <Link as={Link} to="/contact"><span>Contact</span></Link>
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
            </div>
            <div className='wellness__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
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
import React, { useState } from 'react';
import './navbar.css';

const Menu = () => (
    <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#services'>Services</a></p>
    <p><a href='contact'>Contact</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='wellness__navbar'>
            <div className='wellness__navbar-links'>
                <div className='wellness__navbar-links_logo'>
                    <img src={logo} alt='logo' />
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
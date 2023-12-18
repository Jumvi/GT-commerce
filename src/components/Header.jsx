import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <header className='header'>
                <nav className='navigation'>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/categories'>Catégories</NavLink>
                    <NavLink to='/accessoires'>Accessories</NavLink>
                </nav>
                <div>
                    <div className='compte-panier'>
                        <NavLink to='/compte'><img src="" alt="avatar compte" /></NavLink>
                        <NavLink to='/panier'><img src="" alt="icone panier" /></NavLink>
                    </div>
                </div>
            </header>
            
        </div>
    );
}

export default Header;
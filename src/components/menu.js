import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'

export const Menu = () => (
    <nav className='menu'>
        <div className='logo'>
            TWITTER
        </div>
        <ul className='menu-points'>
            <li className='menu-item'>
                <NavLink className='menu-link' to='/' exact>Главная</NavLink>
            </li>
            <li className='menu-item'>
                <NavLink className='menu-link' to='/profile'>Мой профиль</NavLink>
            </li>
        </ul>
    </nav>
)
import React from 'react'
import './header.css';
import logo from '../assets/logo_brankica.png'
import phone from '../assets/phone.png'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='nav-wrapper'>
        <div className='nav-menu'>
            <div className='nav-logo'>
                <Link to='/'><img src={logo} alt="logo" /></Link>
            </div>
            <div className='nav-menu-list'>
                <Link className='menu-item' to='/'>Home</Link>
                <Link className='menu-item' to='/usluge'>Usluge</Link>
                <Link className='menu-item' to='/o nama'>O nama</Link>
                <Link className='menu-item' to='/kontakt'>Kontakt</Link>
            </div>
        </div>
        <div className='reserve-nav'>
            <div className='phone-widget'>
                <img src={phone} alt="zakazi" /> 
            </div>
        </div>
        
    </div>
  )
}

export default Header

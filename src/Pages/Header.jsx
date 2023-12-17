import React, { useState,useEffect } from 'react'
import '../styles/home.css'
import { NavLink, Outlet } from 'react-router-dom'
export default function Header() {
  const [click, setClick] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 520) {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  useEffect(() => {
    // Appeler handleResize une fois au chargement pour déterminer l'état initial
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    setTimeout(() => {
      setClick(!click);
    }, 100);
  };
  
  return (
    <div>
      <header>
        <nav>
           <NavLink to="/"><img src='./assets/shared/logo.svg' alt='logo' /></NavLink>
           { !click &&<img src='.\assets\shared\icon-hamburger.svg' alt='icon' className='menu' onClick={handleClick}/> }
          { click && <span>
            <ul>
               <li><img src='.\assets\shared\icon-close.svg' alt='icon' className='close' onClick={handleClick}/></li>
              <li><NavLink to="/">00 HOME</NavLink></li>
              <li><NavLink to="destination">01 DETINATION</NavLink></li>
              <li><NavLink to="crew">02 CREW</NavLink></li>
              <li><NavLink to="technologie">03 TECHNOLOGIE</NavLink></li>
            </ul>
          </span>}
        </nav>
      </header>
      <Outlet />
    </div>
  )
}

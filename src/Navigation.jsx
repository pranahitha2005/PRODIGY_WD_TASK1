import React, { useEffect, useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setActive(href);
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <ul>
        <li>
          <a 
            href="#home" 
            onClick={(e) => handleClick(e, '#home')}
            className={active === '#home' ? 'active' : ''}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            onClick={(e) => handleClick(e, '#about')}
            className={active === '#about' ? 'active' : ''}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#services" 
            onClick={(e) => handleClick(e, '#services')}
            className={active === '#services' ? 'active' : ''}
          >
            Services
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            onClick={(e) => handleClick(e, '#contact')}
            className={active === '#contact' ? 'active' : ''}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

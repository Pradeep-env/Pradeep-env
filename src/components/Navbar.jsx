import React, { useState, useEffect } from 'react';
import '../index.css';
import { MenuIcon, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      if (window.innerWidth > 1024) setIsOpen(true);
      else setIsOpen(false);
    };

    handleResize(); // Run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    if (isMobile) setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <h2 className='title'>Portfolio</h2>

      {(isOpen || !isMobile) && (
        <ul className='drop'>
          <a href="#homepanel"><li>Home</li></a>
          <a href='#about'><li>About</li></a>
          <a href='#projects'><li>Projects</li></a>
          <a href='#contact'><li>Contact</li></a>
        </ul>
      )}

      
       {isOpen ? (
          <X color='white' onClick={toggleMenu} id='menu' />
        ) : (
          <MenuIcon color='white' onClick={toggleMenu} id='menu' />
        )}
      
    </div>
  );
};

export default Navbar;

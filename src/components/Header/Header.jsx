import './styles.css'
import React, { useEffect, useState } from 'react'

function Header() {
  const [isNavHidden, setIsNavHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !isNavHidden) {
        setIsNavHidden(true);
      } else if (window.scrollY === 0 && isNavHidden) {
        setIsNavHidden(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavHidden]);

  return (
    <header>
      <nav className={`navigation ${isNavHidden ? 'hidden' : ''}`}>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">PROJECTS</a></li>
        <li><a href="#">CONTACT <span class="me">ME</span></a></li>
      </nav>
    </header>
  )
}

export default Header

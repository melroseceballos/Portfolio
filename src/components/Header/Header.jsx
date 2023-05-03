import './styles.css'
import React, { useEffect, useState } from 'react'
import { Link, Routes, Route} from "react-router-dom"
import Home from "../HomePage/home"
import About from "../AboutPage/about"
import Projects from "../ProjectsPage/projects"
import Contact from "../ContactPage/contact"

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
    <>
    <header>
      <nav className={`navigation ${isNavHidden ? 'hidden' : ''}`}>
        <Link to='/home'><li><a href="#">HOME</a></li></Link>
        <Link to='/about'><li><a href="#">ABOUT</a></li></Link>
        <Link to='/projects'><li><a href="#">PROJECTS</a></li></Link>
       <Link to='/contact'><li><a href="#">CONTACT <span class="me">ME</span></a></li></Link>
      </nav>
    </header>
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default Header

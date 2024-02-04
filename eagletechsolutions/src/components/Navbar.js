import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import linkedin from '../components/img/linkedin.png';
import mail from '../components/img/mail.png';
import instagram from '../components/img/instagram.png';
import whatsapp from '../components/img/whatsapp.png';
import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";
import EagleTechLogo from "../components/img/EagleTechlogo.png"
export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={EagleTechLogo} alt="Logo" className='img-logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#whoweare" className={activeLink === 'whoweare' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('whoweare')}>Who we are</Nav.Link>

              <Nav.Link href="#whatwedo" className={activeLink === 'whatwedo' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('whatwedo')}>What we do</Nav.Link>
            </Nav>
            <span className="navbar-text">
              {/* <div className="social-icon">
                <a href="#"><img src={linkedin} alt="" /></a>
                <a href="#"><img src={mail} alt="" /></a>
                <a href="#"><img src={instagram} alt="" /></a>
                <a href="#"><img src={whatsapp} alt="" /></a>
              </div> */}
              <HashLink to='#contact'>
                <button className="vvd"><span>Contact Us</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
    
  );
}

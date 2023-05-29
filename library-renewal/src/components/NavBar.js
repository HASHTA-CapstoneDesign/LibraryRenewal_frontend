import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import librarylogo from '../assets/img/librarylogo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarOffcanvas from 'react-bootstrap/esm/NavbarOffcanvas';

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
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
<Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={librarylogo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Offcanvas id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/books"><a style={{color:'White'}}>books</a></Nav.Link>
              <Nav.Link href="/notice"><a style={{color:'White'}}>notice</a></Nav.Link>
              <Nav.Link href="/Maps"><a style={{color:'White'}}>maps</a></Nav.Link>
              <Nav.Link href="/myloan"><a style={{color:'White'}}>Mypage</a></Nav.Link>
              <Nav.Link href="/studyroom/reserve"><a style={{color:'White'}}>RoomReserve</a></Nav.Link>
            </Nav>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Router>
  );
};

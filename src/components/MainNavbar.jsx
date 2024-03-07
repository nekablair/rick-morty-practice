import { Link } from 'react-router-dom'
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Img from '../assets/rickmorty.jpeg' //absolute path of img


const MainNavbar = () => {

  return (
    <>
      <Navbar bg='dark' expand='lg' className='bg-body-tertiary --bs-dark-text'>
        <Container fluid className='text-secondary text-uppercase fw-bold '>
          <Navbar.Brand >
            <img src={Img} alt='alt-tag' />
          </Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/characters">Characters</Link>
          <Link to="/contact">Contact</Link>
        </Container>
      </Navbar>
    </>
  )
}

export default MainNavbar
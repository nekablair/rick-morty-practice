import React from 'react';
// import Navbar from 'react-boostrap/Navbar';
import Nav from 'react-boostrap/Nav';
import Container from 'react-bootstrap/Container';
// import Img from './src/assets/imgs/pic1.jpeg' /absolute path of img

const MainNavbar = () => {

  return (
    <>
      {/* <Navbar bg='dark' expand='lg' className='bg-body-tertiary'> */}
        <Container fluid>
          {/* <Navbar.Brand > */}
            {/* <img src={`https://rickandmortyapi.com/`} alt='alt-tag' /> */}
          {/* </Navbar.Brand> */}
          <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="/about">About</Nav.Link>
          <Nav.Link to="/characters">Characters</Nav.Link>
          <Nav.Link to="/contact">Contact</Nav.Link>
        </Container>
      {/* </Navbar> */}
    </>
  )
}

export default MainNavbar
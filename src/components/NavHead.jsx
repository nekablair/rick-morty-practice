// import React from 'react';/
// import Navbar from 'react-boostrap/Navbar';
// import Nav from 'react-boostrap/Nav'
import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';

const NavHead = () => {
    <>
    <Navbar expand='lg' className='bg-body-tertiary' >
        <Nav.Link to='/'>Home</Nav.Link>
        <Nav.Link to='/about'>About</Nav.Link>
        <Nav.Link to='/characters'>Characters</Nav.Link>
        <Nav.Link to='/contact'>Contact</Nav.Link>
    </Navbar>
    {/* <Navbar bg='dark' expand='lg' className='bg-body-tertiary'> */}
      {/* <Container fluid> */}
        {/* <Navbar.Brand > */}
          {/* <img src={`https://rickandmortyapi.com/`} alt='alt-tag' /> */}
        {/* </Navbar.Brand>
        <Nav.Link to="/">Home</Nav.Link>
        <Nav.Link to="/about">About</Nav.Link>
        <Nav.Link to="/characters">Characters</Nav.Link>
        <Nav.Link to="/contact">Contact</Nav.Link> */}
      {/* </Container> */}
    {/* </Navbar> */}
    {/* <Navbar bg='dark' expand='lg' className='bg-body-tertiary'>
        <Container fluid>
          <Navbar.Brand >
            {/* <img src={`https://rickandmortyapi.com/`} alt='alt-tag' /> */}
          {/* </Navbar.Brand>
          <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="/about">About</Nav.Link>
          <Nav.Link to="/characters">Characters</Nav.Link>
          <Nav.Link to="/contact">Contact</Nav.Link>
        </Container>
      </Navbar> */}
  </>
}

export default NavHead
// import { useState } from 'react'
import { Outlet, Link} from 'react-router-dom';
// import MainNavbar from './components/MainNavbar';
// import NavHead from './components/NavHead';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import './App.css'

function App() {

  return (
    <>
      {/* <MainNavbar /> */}
      {/* <NavHead />*/}
      <Navbar expand='lg' bg='dark' data-bs-theme='dark' className='bg-body-tertiary' >
        <Container id='nav-container'>
        <Navbar.Brand href="https://rickandmortyapi.com/" target="blank">Rick & Morty</Navbar.Brand>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/characters'>Characters</Link>
        <Link to='/contact'>Contact</Link>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default App

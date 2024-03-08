// import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
// import Container from 'react-bootstrap/Container'
// import Image from 'react-bootstrap/Image'
import './App.css'

function App() {

  const contextCard = {
    favorites,
    addToFavorites
  }

  return (
    <>
      <MainNavbar />
      {/* <NavHead />*/}
      {/* <Navbar data-testnavbar="cypress-navbar" expand='lg' bg='dark' data-bs-theme='dark' className='bg-body-tertiary p-3' >
        <Container id='nav-container'>
        <Navbar.Brand href="https://rickandmortyapi.com/" target="blank">Rick & Morty</Navbar.Brand>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/characters'>Characters</Link>
        {/* <Link to='/contact'>Contact</Link> */}
        {/* </Container> */}

      <Outlet context={contextCard} />
    </>
  )
}

export default App

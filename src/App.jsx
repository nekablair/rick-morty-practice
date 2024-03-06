import { useState } from 'react'
import { Outlet, Link } from "react-router-dom"
// import Navbar from "./Navbar.jsx"
// import Footer from "./Footer.jsx"

function App() {

  return (
    <>
      <nav>
        <h1>Navbar</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <nav>
        <h1>Footer</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default App

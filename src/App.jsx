import { useState } from 'react'
import { Outlet, Link } from "react-router-dom"
// import Navbar from "./components/Navbar.jsx"
import Navbar from "react-boostrap/Navbar"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"



function App() {

  return (
    <>
    <Navbar>
      <Row>
        <Col xs>
          <Link to="/">Home</Link>
        </Col>
        <Col>
          <Link to="/about">About</Link>
        </Col>
        <Col>
          <Link to="/contacts">Contacts</Link>
        </Col>
      </Row>
      {/* <Link to="/"></Link> */}
    </Navbar>
      <nav>
          {/* <h1>Navbar</h1> */}
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
      <Outlet /> {/* placeholder for whatever is in the router*/}
      <nav>
          {/* <h1>Navbar</h1> */}
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

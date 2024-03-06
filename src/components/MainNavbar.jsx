// import React from 'react'
import { Link } from "react-router-dom"
// import Navbar from 'react-boostrap/Navbar'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

const MainNavbar = () => {

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/contact">Contact</Link>
    </>
  )
}

{/* <nav>
          {/* <h1>Navbar</h1> */}
        //   <ul>
        //     <li>
        //       <Link to="/">Home</Link>
        //     </li>
        //     <li>
        //       <Link to="/about">About</Link>
        //     </li>
        //     <li>
        //       <Link to="/characters">Characters</Link>
        //     </li>
        //     <li>
        //       <Link to="/contact">Contact</Link>
        //     </li>
        //   </ul>
        // </nav> */}

export default MainNavbar
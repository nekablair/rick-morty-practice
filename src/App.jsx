import { useState } from 'react'
import { Outlet, Link } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
// import Footer from "./Footer.jsx"

// const Navbar = () => {
//   <nav>
//         <h1>Navbar</h1>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/characters">Characters</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
// }



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
      <Outlet /> {/* placeholder for whatever is in the router*/}
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
    </>
  )
}

export default App

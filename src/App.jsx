// import { useState } from 'react'
import { Outlet} from "react-router-dom"
import MainNavbar from "./components/MainNavbar.jsx"




function App() {

  return (
    <>
      <MainNavbar />
      <Outlet /> {/* placeholder for whatever is in the router*/}
      
    </>
  )
}

export default App

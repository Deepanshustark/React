import React from 'react'
import NavBar from "./components/header/NavBar"
import Footer from './components/Footer/Foot.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <NavBar/>
        <Outlet/>
        <Footer/>

    </>
  )
}

export default Layout

import React from 'react'
import Navbar from '../../Componements/Navbar'
import Topbar from '../../Componements/Topbar'
import Footer from '../../Componements/Footer'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  )
}

export default Home
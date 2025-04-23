import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/user/NavBar/Navbar'

function Layout() {
  return (
    <>
    <Navbar/>
      <main className='layout' style={{padding: '4px'}}>
        <Outlet />
      </main>  
    </>
  )
}

export default Layout

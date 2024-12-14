import React from 'react'
import Home from '../Pages/HomePage/Home'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayOut = () => {
  return (
    <>
      <header className='bg-base-300'><Navbar /></header>
        <main className='min-h-[calc(100vh-308px)]'>
        <Outlet/>
        </main>
        <footer> <Footer/> </footer>
    </>
  )
}

export default MainLayOut
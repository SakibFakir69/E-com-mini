import { useState } from 'react'
import Navbar from './layouts/Navbar';
import { Outlet } from 'react-router-dom';



function MainLayoutes() {
  

  return (
    <div>
    <nav>
      <Navbar/>
    </nav>
    <main>
      <Outlet/>
    </main>
      
      
    </div>
  )
}

export default MainLayoutes;

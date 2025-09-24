import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Agents from './Pages/Agents'
import Project from './Pages/Project'
import Home from './Pages/Home'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Navbar from './Components/Home/Navbar/Navbar.jsx'
import FullScreenNav from './Components/Home/Navbar/FullScreenNav.jsx'

const App = () => {

  return (
    
    <div>
        <Navbar /> 
        <FullScreenNav />
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/agents' element={<Agents/>} />
        <Route path='/project' element={<Project/>} />
      </Routes> 
    </div>
  )
}

export default App 
import { Fragment, useState } from 'react'
import Navbar from './elements/Navbar'
import { Route, Routes  } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import AdminHome from './pages/AdminHome'
import StaffHome from './pages/StaffHome'

function App() {
  

  return(
    <Fragment>
      <Navbar />
      <div style={{marginTop: "70px"}}>
      <Routes>
        <Route path="/activities-alan-creative-2024/" element={<Home />}/>
        <Route path="/activities-alan-creative-2024/*" element={<Home />}></Route>
        <Route path="/activities-alan-creative-2024/Cart" element={<Cart />} />
        <Route path="/activities-alan-creative-2024/Profile" element={<Profile />} />
        <Route path="/activities-alan-creative-2024/Admin" element={<AdminHome />} />
        <Route path="/activities-alan-creative-2024/Admin/*" element={<AdminHome />} />
        <Route path="/activities-alan-creative-2024/Staff" element={<StaffHome />} />
      </Routes>
      </div>
    </Fragment>
  )
}

export default App

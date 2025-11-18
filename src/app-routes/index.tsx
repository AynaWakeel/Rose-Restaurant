import React from "react"
import { Route, Routes } from "react-router"
import Home from "../pages/home"
import About from "../pages/about"
import Experience from "../pages/experiences"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const AppRoutes = () => {
  return (
    <div>

        <Navbar/>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/experience" element={<Experience/>}/>
        </Routes>

        <Footer/>

    </div>
  )
}

export default AppRoutes
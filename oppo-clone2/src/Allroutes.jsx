import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Smartphones from './pages/Smartphones'
import Tablets from './pages/Tablets'
import Accessories from './pages/Accessories'
import About from './pages/About'
import Audio from './pages/Audio'
import ProductPage from './pages/ProductPage'
import Description from './pages/Description'
import NotFound from './pages/NotFound'
import Cartpage from './pages/Cartpage'

function Allroutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<ProductPage />}></Route>
        <Route path='/smartphones' element={<Smartphones />}></Route>
        <Route path='/tablets' element={<Tablets/>}></Route>
        <Route path='/audio' element={<Audio />}></Route>
        <Route path='/accessories' element={<Accessories />}></Route>
        <Route path='/description/:id' element={<Description />}></Route>
        <Route path='/cart' element={<Cartpage />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        {/* <Route path='/about' element={<About />}></Route> */}
    </Routes>
  )
}

export default Allroutes

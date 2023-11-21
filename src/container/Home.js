import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Header from '../components/Header'
import Product from './Product'
import Cart from './Cart'

const Home = () => (
  <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/product/:id' element={<Product/>}/>

    <Route path='/cart' element={<Cart/>}/>
    </Routes>

  </div>
)

export default Home
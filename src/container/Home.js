import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Header from '../components/Header'

const Home = () => (
  <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Dashboard />} />
    </Routes>

  </div>
)

export default Home
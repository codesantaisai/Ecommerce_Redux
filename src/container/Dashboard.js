import React from 'react'
import { ProductList } from '../data/ProductList'
import ProductCard from '../components/ProductCard'

const Dashboard = () => {
  return (
    <div className='d-flex flex-wrap justify-content-center p-3'>
        {ProductList.map((product)=><ProductCard {...product}/>)}
    </div>
  )
}

export default Dashboard
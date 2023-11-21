import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = (props) => {
    const navigate = useNavigate();
  return (
    <div className='card m-2 cursor-pointer' style={{width:300}} role='button' onClick={()=>navigate(`/product/${props.id}`)}>
        <div className='mt-2'>
            <img src={props.thumbnail} alt={props.title} height={150} width={180} className='border-radius-9' />
        </div>
        <div className='card-body'>
            <h5 className='card-title'>{props.title}</h5>
            <h6 className='mt-2'>Price: {`$${props.price}`}</h6>
            <h6 className='mt-2'>Discount: {props.discountPercentage}%</h6>
            <h6 className='mt-2'>Rating: {props.rating}</h6>
            <div>
                {props.stock > 0 ? <button className='btn btn-success mt-4'>Available</button> : <button className='btn btn-outline-danger'>Out of Stock</button>}
            </div>
        </div>
    </div>
  )
}

export default ProductCard
import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='card m-2' style={{width:300}}>
        <div className='mt-2'>
            <img src={props.thumbnail} alt={props.title} height={150} width={180} className='border-radius-9' />
        </div>
        <div className='card-body'>
            <h5 className='card-title'>{props.title}</h5>
            <h6 className='mt-2'>Price: {`$${props.price}`}</h6>
            <h6 className='mt-2'>Discount: {props.discountPercentage}%</h6>
            <h6 className='mt-2'>Rating: {props.rating}</h6>

        </div>
    </div>
  )
}

export default ProductCard
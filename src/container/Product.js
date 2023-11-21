import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductList } from '../data/ProductList';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/reducer/cart';

const Product = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const props = ProductList.find((product)=>product.id === parseInt(params.id))


    const addToCart = ()=>{
        dispatch(addItem(props))
    }
  return (
    <div className='card m-2'>
        <div className='mt-2'>
            <img src={props.thumbnail} alt={props.title} height={350} width={400} className='border-radius-9' />
        </div>
        <div className='card-body mt-3'>
            <h5 className='card-title'>{props.title}</h5>
            <h6 className='mt-2'>Price: {`$${props.price}`}</h6>
            <h6 className='mt-2'>Discount: {props.discountPercentage}%</h6>
            <h6 className='mt-2'>Rating: {props.rating}</h6>
            <div>
                {props.stock > 0 ? 
                <>
                <button className='btn btn-success mt-4 me-2'>Buy Now</button> 
                <button className='btn btn-success mt-4 ms-2 ' onClick={()=>addToCart}> Add to card </button> 
                </>
                : <button className='btn btn-outline-danger'>Out of Stock</button>}
            </div>
        </div>
    </div>  )
}

export default Product
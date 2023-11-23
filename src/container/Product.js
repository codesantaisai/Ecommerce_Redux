import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductList } from '../data/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/reducer/cart';

const Product = () => {
    const [alert,setAlert] = useState(false);
    const params = useParams();
    const dispatch = useDispatch();
    const props = ProductList.find((element)=>element.id === parseInt(params.id))

    const list = useSelector((state)=>state.cart.list);
    const element = list.find((item)=>item.id ===(props?.id ?? null))
    const addToCart = ()=>{
        setAlert(true);
        setTimeout(()=>setAlert(false),3000)
        dispatch(addItem(props))
    }

    const navigate = useNavigate();
  return (
    <div className='card m-2'>
        {alert && <span className='alert alert-success'>Item Added to card</span>}
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
                <button className='btn btn-success mt-4 me-2' onClick={()=> navigate(`/checkout/${props.id}`)}>Buy Now</button> 
                {element?.count > 0 ?<button className='btn btn-outline-warning mt-4 ms-2 ' onClick={()=>navigate('/cart')}> Go to card </button> :
                <button className='btn btn-success mt-4 ms-2 ' onClick={addToCart}> Add to card </button> 
                 }
                </>
                : <button className='btn btn-outline-danger'>Out of Stock</button>}
            </div>
        </div>
    </div>  )
}

export default Product
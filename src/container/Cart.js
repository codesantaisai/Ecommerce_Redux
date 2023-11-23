import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductListItem from '../components/ProductListItem'
import { modifyItem,removeItem } from '../redux/reducer/cart'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const list = useSelector((state)=>state.cart.list)
    const dispatch = useDispatch();

    const incrementItem = (item)=>{
        
        dispatch(modifyItem({...item, count:item.count+1}))
    }
    const decrementItem = (item)=>{
        if(item.count===1){
            dispatch(removeItem(item))
        }
        else{
            dispatch(modifyItem({...item, count:item.count-1}))
        }
    }
    const removeItemFromCart = (item)=>{
        dispatch(removeItem(item))
    }
const navigate = useNavigate();
  return (
   <>
    {list.length > 0 ? (
    <>
    {list.map((item)=> (<ProductListItem 
    {...item} 
    key={item.id} 
    incrementItem={()=>incrementItem(item)} 
    decrementItem={()=>decrementItem(item)} 
    removeItem={()=>removeItemFromCart(item)}
    />
    ))}
    <button className='btn btn-success' onClick={()=>navigate('/checkout')}>Go to checkout</button>
    </>
    ): 
    (<h3>Your Cart is empty</h3>)}
   </>
  );
}

export default Cart
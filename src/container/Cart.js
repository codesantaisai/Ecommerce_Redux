import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductListItem from '../components/ProductListItem'
import { modifyItem } from '../redux/reducer/cart'

const Cart = () => {
    const list = useSelector((state)=>state.cart.list)
    const dispatch = useDispatch();

    const incrementItem = (item)=>{
        dispatch(modifyItem({...item, count:item.count+1}))
    }
    const decrementItem = (item)=>{
        dispatch(modifyItem({...item, count:item.count-1}))
    }
    const removeItem = ()=>{

    }

  return (
   <>
    {list.map((item)=> (<ProductListItem {...item} key={item.id} incrementItem={()=>incrementItem(item)} decrementItem={()=>decrementItem(item)} removeItem={item}/>))}
   </>
  )
}

export default Cart
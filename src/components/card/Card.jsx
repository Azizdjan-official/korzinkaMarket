import React from 'react'
import { add } from '../../redux/reducers/product-reducer'
import { useDispatch } from 'react-redux'


const Card = (product) => {
    const dispatch = useDispatch();
    const addProduct = () =>{
        dispatch(add(product));
    }
  return (
    <div className='rounded-lg shadow-xl p-2 border'>
        <div className='w-full h-[200px] '>
            <img src={product.image} className='h-full w-full object-scale-down' />
        </div>
        <h1 className='text-lg text-slate-500 font-bold border text-center my-2'>{product.title.split(" ")[0]}</h1>
        <button className='bg-[#FFFF00] rounded-lg px-2 py-1 text-base'>{product.price} $</button>
        <p>Items: <strong>{product.count} left</strong>  </p>
        <p>Rating: <strong>{product.rate} </strong> </p>
        <button onClick={addProduct} className='w-full py-2 font-bold text-center text-white bg-cyan-400'>Add</button>
    </div>
  )
}

export default Card

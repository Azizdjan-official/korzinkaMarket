import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleAmount, remove } from '../../redux/reducers/product-reducer'


const StoreCard = ({id,title,userPrice,image, userCount,count,rate}) => {
  const dispatch = useDispatch();
  const [showBtn, setShowBtn] = useState(false)
  
  const addCount = ()=>{
      if(userCount < count){
        dispatch(toggleAmount({type:"add",id}))
    }
    else{
        setShowBtn(true)
    }
  }
  const removeProduct = ()=>{
    if(userCount > 0){
        dispatch(toggleAmount({type:"remove",id}))
    }
  }
  const deleteProduct = ()=>{
    dispatch(remove({id}))
  }
    return (
    <div className='flex items-center border p-2 gap-3 relative'>
      <div className='w-[100px] h-[100px]'>
        <img src={image} className='w-full h-full object-scale-down'/>
      </div>
      <div>
      <div>
        <h2 className='text-base'>{title.split("")}</h2>
        <strong>{userPrice}$</strong>
        <p>{count} total count</p>
      </div>
        
        <button disabled={showBtn || userCount === count} onClick={addCount} className=' disabled:opacity-60 disabled:cursor-not-allowed px-3 py-2 text-white bg-cyan-500 mr-1'>+</button>
        <button  className='px-3 cursor-pointer py-2 text-white bg-green-500 mr-1'>{userCount}</button>
        <button disabled={userCount < 2 } onClick={removeProduct} className='disabled:opacity-60 disabled:cursor-not-allowed px-3 py-2 text-white bg-cyan-500 mr-1'>-</button>
      </div>
      <button onClick={deleteProduct} className='absolute top-10 right-4 rounded-lg px-3 py-2 bg-red-600 text-white font-bold'>X</button>
    </div>
  )
}

export default StoreCard

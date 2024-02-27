import React, { useState } from 'react'
import Modal from './../modal/Modal';
import { useSelector } from 'react-redux';
import StoreCard from '../store-card/StoreCard';
// import { request } from '../../config/request';


const ProductsContainer = () => {
  let [isOpen, setIsOpen] = useState(false)
  const { products, totalPrice } = useSelector((state)=> state.product)
  // request.get("/products").then(res => { console.log(res.data); });
  return (
    <div>
      <button className='bg-[#FBC100] rounded-lg px-3 py-2'  onClick={()=> setIsOpen(true)}>korzinka</button>
      
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <button className='px-3 cursor-pointer py-2 text-white  bg-green-500 mr-1 rounded-lg my-2'>Overall: <strong>{totalPrice} $</strong> </button>
        {products.map((item) => <StoreCard key={item.id} {...item} />)}
      </Modal>
    </div>
  )
}

export default ProductsContainer

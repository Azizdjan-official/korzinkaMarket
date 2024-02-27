import React from 'react'
import ProductsContainer from '../store-productss/ProductsContainer'

const Header = () => {
  return (
    <div className='flex justify-between bg-[#F7F7F7] py-3 px-4'>
      <div className='flex gap-3 items-center justify-center w-[30%]'>
        <h1 className='font-semibold text-black '>texnomart*</h1>
        <button className='bg-[#FBC100] text-black rounded-xl px-3 py-2'>Каталог</button>
      </div>
      <div className='flex gap-3 items-center justify-center w-[50%]'>
        <input type="text" placeholder='Қидириш' className='w-full rounded-lg py-2 border border-[#FBC100] placeholder:text-[#A9A3AF] px-4' />
      </div>
      <div className='flex gap-3 items-center justify-center w-[20%]'>
        <span>
          <button className='bg-[#FBC100] rounded-lg px-3 py-2'>kirish</button>
        </span>
        <span>
            <ProductsContainer/>
        </span>
        
      </div>
    </div>
  )
}

export default Header

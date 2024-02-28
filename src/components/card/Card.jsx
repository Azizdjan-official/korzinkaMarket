import React, { useEffect, useState } from 'react'
import { add, remove } from '../../redux/reducers/product-reducer'
import { useDispatch, useSelector } from 'react-redux'


const Card = (product) => {
  const { products } = useSelector((state) => state.product);
  const [button, setButton] = useState(false);
  useEffect(() => {
    setButton(products.find((item) => item.id === product.id));
  }, [products, product.id]);

    const dispatch = useDispatch();
    // const addProduct = () =>{
    //     dispatch(add(product));
    // }
    const addProduct = () => {
      dispatch(add(product));
      setButton(true);
    };
    const DeleteProduct = () => {
      dispatch(remove(product));
      setButton(false);
    };
  return (
    <div className='rounded-lg shadow-xl p-2 border'>
        <div className='w-full h-[200px] '>
            <img src={product.image} className='h-full w-full object-scale-down' />
        </div>
        <h1 className='text-lg text-slate-500 font-bold border text-center my-2'>{product.title.split(" ")[0]}</h1>
        <button className='bg-[#FFFF00] rounded-lg px-2 py-1 text-base'>{product.price} $</button>
        <p>Items: <strong>{product.rating.count} left</strong>  </p>
        <p>Rating: <strong>{product.rating.rate} </strong> </p>
        {/* <button onClick={addProduct} className='w-full py-2 font-bold text-center text-white bg-cyan-400'>Add</button> */}
        {button ? (
        <button
          onClick={DeleteProduct}
          className=" bg-red-500 rounded-lg border-transparent w-full mt-5 py-3"
        >
          Remove
        </button>
      ) : (
        <button
          onClick={addProduct}
          className="bg-green-600 rounded-lg border-transparent w-full mt-5 py-3"
        >
          Add
        </button>
      )}
    </div>
  )
}

export default Card

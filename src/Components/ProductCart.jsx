import React from 'react'
import { useCartStore } from '../Zustand/Store/store'

const ProductCart = ({ product }) => {
  const { title, description, price, image } = product
  const dispatch = useCartStore((state) => state.dispatch)
  return (
    <div className='bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4'>
      <img
        src={image}
        alt={title}
        className='h-40 mx-auto object-contain mb-4 rounded-md'
      />
      <h2 className='text-xl font-semibold text-gray-800'>{title}</h2>
      <p className='text-sm text-gray-600 mt-2'>{description}</p>
      <div className='mt-4 flex justify-between items-center'>
        <span className='text-lg font-bold text-blue-600'>${price}</span>
        <button
          onClick={() =>
            dispatch({
              type: 'Add_To_Cart',
              payload: product,
            })
          }
          className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-2 py-2 rounded-full shadow-md hover:scale-105 transition-transform'
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCart

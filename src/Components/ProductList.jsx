import React from 'react'
import { products } from '../Enum/enum'
import ProductCart from './ProductCart'

const ProductList = () => {
  return (
    <div className='grid grid-cols-2 gap-4 '>
      {products.map((product) => (
        <ProductCart product={product} />
      ))}
    </div>
  )
}

export default ProductList

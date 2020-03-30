import React from 'react'
import ProductItem from './ProductItem'

const ProductBlock = ({ info, items }) => {
  return (
    <div className="col-12">
      <h4 className="py-3 h4">{info.name}</h4>
      <div className="row pl-3">
        {items.map((item,i)=> <ProductItem key={i} {...item} />)}
      </div>
    </div>
  )
}

export default ProductBlock

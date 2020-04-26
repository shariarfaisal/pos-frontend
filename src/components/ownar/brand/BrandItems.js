import React,{ useState, useEffect, useContext } from 'react'
import ProductBlock from './ProductBlock'
import { BrandLocalContext } from './BrandLocalContext'
import { useParams } from 'react-router-dom'


const itemsToProduct = (items) => {
  if(items){
    return items.reduce((a,b) => {
      if(a[b.product._id]){
        a[b.product._id].items.push(b)
      }else{
        a[b.product._id] = {
          info: b.product,
          items: [b]
        }
      }
      return a
    },{})
  }
}

const BrandItems = (props) => {
  const { brandId } = useParams()
  const { items, getItemsByBrand } = useContext(BrandLocalContext)
  const products = itemsToProduct(items)

  useEffect(() => {
    getItemsByBrand(brandId)
  },[])

  return(
    <div className="row">
      {products && Object.keys(products).map((product,i) => <ProductBlock key={i} {...products[product]} /> )}
    </div>
  )
}

export default BrandItems

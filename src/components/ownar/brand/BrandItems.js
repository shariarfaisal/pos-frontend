import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import ProductBlock from './ProductBlock'

const getItem = async (brandId,setItems) => {
  const items = await axios.get(`http://localhost:1000/api/item/${brandId}/brand`)
  if(items){
    setItems(items.data)
  }
}

const itemsToProduct = (items) => {
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

const BrandItems = ({ brandId }) => {
  const [items,setItems] = useState([])
  const products = itemsToProduct(items)

  useEffect(() => {
    getItem(brandId,setItems)
  },[])

  return(
    <div className="row">
      {Object.keys(products).map((product,i) => <ProductBlock key={i} {...products[product]} /> )}
    </div>
  )
}

export default BrandItems

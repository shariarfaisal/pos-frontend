import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import ItemBlock from './ItemBlock'

const getProduct = async (id,set) => {
  try{
    const get = await axios.get(`http://localhost:1000/api/product/${id}`)
    if(get){
      set(get.data)
    }
  }catch(err){
    console.log(err.response.data);
  }
}



const ProductBlock = ({ productId, items}) => {
  const [product,setProduct] = useState(null)

  useEffect(() => {
    getProduct(productId,setProduct)
  },[])

  return (
    <div className="product-block mb-3">
      {product && <h4>{product.name} <small className="text-muted">@{product.code}</small></h4>}
      <div className="row items mt-3">
        {items.map((item,i) => <ItemBlock  key={i} {...item} />)}
      </div>
    </div>
  )
}


export default ProductBlock

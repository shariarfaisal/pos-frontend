import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import ProductBlock from './ProductBlock'

const getProducts = async (set) => {
  const get = await axios.get(`http://localhost:1000/api/branchItem`)
  if(get){
    const data = get.data.reduce((a,b) => {
      if(a[b.item.product]){
        a[b.item.product].push(b)
      }else{
        a[b.item.product] = [b]
      }
      return a
    },{})
    set(data)
  }else{
    set({})
  }
}


const Items = (props) => {
  const [products,setProducts] = useState({})

  useEffect(() => {
    getProducts(setProducts)
  },[])

  return(
    <div className="col-lg-11">
      {products && Object.keys(products).map((pro,i) => <ProductBlock key={i} productId={pro} items={products[pro]} />)}
    </div>
  )
}
export default Items

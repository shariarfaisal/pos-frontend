import React,{ useState, useEffect, useContext } from 'react'
import {Link, withRouter } from 'react-router-dom'
import { ProductContext } from '../../../store/ProductContext'
import Items from './item/Items'

const Product = ({ match }) => {
  const [product,setProduct] = useState({})
  const context = useContext(ProductContext)


  useEffect(() => {
    context.product(match.params.proId,setProduct)
  },[])


  return(
    <div className="col-12 p-4">
      <Items id={match.params.proId}/>
    </div>
  )
}
export default withRouter(Product)

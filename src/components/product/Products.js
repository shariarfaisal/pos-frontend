import React,{ useState, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import CreateBox from '../CreateBox'
import Create from './Create'
import { ProductContext } from '../../store/ProductContext'
import ProductItem from './ProductItem'

const Products = ({ match }) => {
  const [show,setShow] = useState(false)
  const context = useContext(ProductContext)


  return(
    <div className="col-lg-10">
      <CreateBox setShow={setShow} title="Create New Product">
        <Create category={match.params.catId} show={show} setShow={setShow} />
      </CreateBox>
      <div className="row">
        {context.products.map((product,i) => {
          return <ProductItem key={i} {...product} />
        })}
      </div>
    </div>
  )
}
export default withRouter(Products)

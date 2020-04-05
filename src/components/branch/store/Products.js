import React,{ useContext } from 'react'
import { ProductContext } from '../../../store/ProductContext'
import { Link, useParams } from 'react-router-dom'

const Products = (props) => {
  const { products } = useContext(ProductContext)
  const { catId } = useParams()

  return(
    <div className="col-xl-11">
      <div className="row">
        {products.map((product,i) => {
          return(
            <div key={i} className="col-md-6 col-lg-4 my-2">
              <div className="light-border">
                <p className="mb-0 h6">
                  <Link className="text-dark" to={`/store/${catId}/${product._id}`}>{product.name}</Link>
                  <small className="text-muted pl-2">@{product.code}</small>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products

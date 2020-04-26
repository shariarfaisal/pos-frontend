import React,{ useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CreateBox from '../../CreateBox'
import Create from './Create'
import { ProductLocalContext } from './ProductLocalContext'
import ProductItem from './ProductItem'

const Products = (props) => {
  const { catId } = useParams()
  const [show,setShow] = useState(false)
  const { category, getSetCategory, products, getSetProducts, getDelete } = useContext(ProductLocalContext)

  useEffect(() => {
    getSetCategory(catId)
    getSetProducts(catId)
  },[])

  return(
    <div className="col-lg-11">
      {category && <h3 className="text-center mb-5">{category.name}</h3>}
      <CreateBox setShow={setShow} title="Create New Product">
        <Create category={catId} show={show} setShow={setShow} />
      </CreateBox>
      <div className="row">
        {products && products.map((product,i) => {
          return <ProductItem key={i} getDelete={getDelete} {...product} />
        })}
      </div>
    </div>
  )
}
export default Products

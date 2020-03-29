import React,{ useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CreateBox from '../../CreateBox'
import Create from './Create'
import { ProductContext } from '../../../store/ProductContext'
import { CategoryContext } from '../../../store/CategoryContext'
import ProductItem from './ProductItem'

const Products = (props) => {
  const { catId } = useParams()
  const [show,setShow] = useState(false)
  const [category,setCategory] = useState(null)
  const context = useContext(ProductContext)
  const categoryContext = useContext(CategoryContext)

  useEffect(() => {
    categoryContext.category(catId,setCategory)
  },[])

  return(
    <div className="col-lg-11">
      {category && <h3 className="text-center mb-5">{category.name}</h3>}
      <CreateBox setShow={setShow} title="Create New Product">
        <Create category={catId} show={show} setShow={setShow} />
      </CreateBox>
      <div className="row">
        {context.products.map((product,i) => {
          return <ProductItem key={i} {...product} />
        })}
      </div>
    </div>
  )
}
export default Products

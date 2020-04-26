import React,{ useState } from 'react'
import CloneCorner from '../../CloneCorner'
import CreateBox from '../../CreateBox'
import AddProduct from './AddProduct'

const Products = ({ products }) => {
  const [show,setShow] = useState(false)
  return(
    <div className="categories">
      <CreateBox
        title="Add New Product"
        setShow={setShow}
      >
        {/*<AddProduct show={show} setShow={setShow} />*/}
      </CreateBox>
      <div className="row">
        {products && products.map((product,i) => {
          return (
            <div className="col-md-6 col-xl-4">
              <div className="gray-border light-shadow">
                <div className="d-flex">
                  <h5>{product.name}</h5>
                  <CloneCorner>
                    <div className="item">Items</div>
                  </CloneCorner>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Products

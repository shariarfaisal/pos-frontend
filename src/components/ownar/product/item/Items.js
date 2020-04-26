import React,{ useEffect, useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import CreateBox from '../../../CreateBox'
import Create from './Create'
import { ItemLocalContext } from './ItemLocalContext'
import BrandBlock from './BrandBlock'


const Items = (props) => {
  const { proId } = useParams()
  const [show,setShow] = useState(false)
  const { product, brands, getSetBrands, getSetProduct} = useContext(ItemLocalContext)

  useEffect(() => {
    getSetProduct(proId)
    getSetBrands()
  },[])

  return(
    <div className="product-items">
      {product && <div className="text-center">
        <h4 className="text-muted">{product.category.name}/ <span className="text-dark">{product.name}</span></h4>
      </div>}
      {brands && <CreateBox setShow={setShow} title="Create New Item">
        <Create show={show} setShow={setShow} brands={brands}/>
      </CreateBox>}
      <div className="row">
        {brands && Object.keys(brands).map((id,i) => <BrandBlock key={i} {...brands[id]} />)}
      </div>
    </div>
  )
}
export default Items

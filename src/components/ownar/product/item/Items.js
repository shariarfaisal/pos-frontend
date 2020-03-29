import React,{ useEffect, useContext, useState} from 'react'
import ItemBlock from './ItemBlock'
import { ProductContext } from '../../../../store/ProductContext'
import { ProductItemContext } from '../../../../store/ProductItemContext'
import { useParams } from 'react-router-dom'
import CreateBox from '../../../CreateBox'
import Create from './Create'

const sortAsBrand = (items) => {
  const obj = {}
  if(items){
    items.forEach((item,i) => {
      if(obj[item.brand._id]){
        obj[item.brand._id].items.push(item)
      }else{
        obj[item.brand._id] = {
          info: item.brand,
          items: [item]
        }
      }
    })
    return obj
  }
}


const BrandBlock = ({ info, items}) => {
  return (
    <div className="col-12 my-2">
      <div className="py-3">
        <h5>{info.name}</h5>
      </div>
      <div className="row ml-2">
        {items.map((item,i) => <ItemBlock key={i} {...item} />)}
      </div>
    </div>
  )
}

const Items = (props) => {
  const { proId } = useParams()
  const [show,setShow] = useState(false)
  const [product,setProduct] = useState(null)
  const [importShow,setImportShow] = useState(false)
  const productContext = useContext(ProductContext)
  const itemContext = useContext(ProductItemContext)

  useEffect(() => {
    productContext.product(proId,setProduct)
  },[])


  return(
    <div className="product-items">
      {product && <div className="text-center">
        <h4>{product.name} <small className="badge badge-warning">{product.category.name}</small></h4>
      </div>}
      <CreateBox setShow={setShow} title="Create New Item">
        <Create show={show} setShow={setShow} />
      </CreateBox>
      <div className="row">
        {Object.keys(sortAsBrand(itemContext.items)).map((id,i) => {
          return <BrandBlock key={i} {...sortAsBrand(itemContext.items)[id]} />
        })}
      </div>
    </div>
  )
}
export default Items

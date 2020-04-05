import React,{ useContext } from 'react'
import { ProductItemContext } from '../../../store/ProductItemContext'
import BrandBlock from './BrandBlock'

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


const Items = (props) => {
  const { items } = useContext(ProductItemContext)

  return(
    <div className="col-xl-11">
      <div className="row">
        {Object.keys(sortAsBrand(items)).map((id,i) => {
          return <BrandBlock key={i} {...sortAsBrand(items)[id]} />
        })}
      </div>
    </div>
  )
}
export default Items

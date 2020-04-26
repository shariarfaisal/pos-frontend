import React,{ useContext, useEffect } from 'react'
import ItemBlock from './ItemBlock'
import { ItemLocalContext } from './ItemLocalContext'
import ItemBlockMore from './ItemBlockMore'
import { useParams } from 'react-router-dom'

const BrandBlock = ({ _id, name, code}) => {
  const { getItemsByBrand, brands } = useContext(ItemLocalContext)
  const { proId } = useParams()
  useEffect(() => {
    getItemsByBrand({ brandId: _id, proId })
  },[])

  return (
    (brands[_id].items && brands[_id].items.length > 0 )? <div className="col-12 my-2">
      <div className="py-3">
        <h5>{name}</h5>
      </div>
      <div className="row ml-2">
        {brands[_id].items.map((item,i) => <ItemBlock key={i} {...item} />)}
        <ItemBlockMore />
      </div>
    </div>: ''
  )
}

export default BrandBlock

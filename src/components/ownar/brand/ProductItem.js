import React from 'react'
import strConvert from '../../../utils/strConvert'
import timeConverter from '../../../utils/timeConverter'

const ProductItem = ({ _id, name, image, createdAt, product, code, description }) => {
  return(
    <div className="col-md-6 col-lg-4 my-2">
      <div className="light-border py-2">
        <p className="mb-0 h6">{name} <small className="badge badge-warning">#{code}</small></p>
        <div className="">
          <small className="">{strConvert(description,100)}</small>
        </div>
        <small className="text-muted text-right d-block">{timeConverter(createdAt)}</small>
      </div>
    </div>
  )
}

export default ProductItem

import React,{ Fragment } from 'react'
import SubItem from './SubItem'


const SingleImport = ({ item, quantity, exports: expts, pp, subItems }) => {
  return(
    <Fragment>
      <h4 className="text-center mb-3">{item.name}</h4>
      <div className="d-flex light-border" style={{background:'#fff'}}>
        <span className="d-block mr-3">Total Imported: <span className="badge badge-info">{quantity + expts}</span></span>
        <span className="d-block mr-3">Quantity: <span className="badge badge-info">{quantity}</span></span>
        <span className="d-block mr-3">Exports: <span className="badge badge-info">{expts}</span></span>
        <span className="d-block mr-3">Purchase Price: <span className="badge badge-info">{pp}</span></span>
      </div>
      <div className="m-3  row mb-4">
        {subItems.map(i => <SubItem key={i._id} {...i} /> )}
      </div>
    </Fragment>
  )
}

export default SingleImport

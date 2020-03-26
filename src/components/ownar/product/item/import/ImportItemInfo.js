import React from 'react'

const Info = ({ item, quantity, pp, expireDate }) => {
  return (
    <div className="col-md-6 col-lg-4 my-2">
      <div className="text-muted light-border" style={{background: '#fff'}}>
        <p className="text-center text-dark mb-0 border-bottom mb-2">{item.name}</p>
        <small className="d-block">Quantity: <span className="badge badge-primary">{quantity}</span></small>
        <small className="d-block">Purchase Price: <span className="badge badge-primary">{pp}</span></small>
        <small className="d-block">Expire Date: <span className="badge badge-primary">{expireDate ? expireDate: 'None'}</span></small>
      </div>
    </div>
  )
}





const ImportItemInfo = ({ item, quantity, pp, expireDate, subItems }) => {
  return(
    <div className="light-border row text-center">
      <div className="col-12 border-bottom text-muted mb-4"><h5>{item.name}</h5></div>
      <div className="col-md-6 col-lg-4 my-2"><p className="mb-0">Quantity: <span className="badge badge-warning">{quantity}</span></p></div>
      <div className="col-md-6 col-lg-4 my-2"><p className="mb-0">Purchase Price: <span className="badge badge-warning">{pp}</span></p></div>
      <div className="col-md-6 col-lg-4 my-2"><p className="mb-0">Expire Date: <span className="badge badge-warning">{expireDate ? expireDate: 'None'}</span></p></div>
      <div className="col-12 row my-2 p-3">
        {subItems.map((sub,i) => <Info key={i} {...sub} />)}
      </div>
    </div>
  )
}

export default ImportItemInfo

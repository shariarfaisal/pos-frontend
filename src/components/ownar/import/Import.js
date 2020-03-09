import React,{ Fragment, useContext, useEffect, useState  } from 'react'
import { ImportContext } from '../../../store/ImportContext'
import { useParams } from 'react-router-dom'
import timeConverter from '../../../utils/timeConverter'
import { Link } from 'react-router-dom'

const SubItem = ({ _id, item, quantity, exports: exp, expireDate, pp }) => {
  return(
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="light-border" style={{background:'#ffffff'}}>
        <p className="m-0 h6">{item.name}</p>
        <small className="d-block">Imported: {quantity+exp}</small>
        <small className="d-block">Quantity: {quantity}</small>
        <small className="d-block">Purchase price: { pp }</small>
        <small className="d-block">Exports: { exp }</small>
        {expireDate && <small>Expire Date: {timeConverter(expireDate)}</small>}
      </div>
    </div>
  )
}

const Import = (props) => {
  const [data,setData] = useState({})
  const { importId } = useParams()
  const context = useContext(ImportContext)

  useEffect(() => {
    context.import(importId,setData)
  },[])
console.log(data);
  return(
    Object.keys(data).length > 0 && <div className="col-11 p-3 light-border">
      <h2>{data.item.name}</h2>
      {(data.quantity + data.exports) > 0 && <div className="d-flex">
        {(data.quantity + data.exports) > 0 && <Fragment>
          <p className="mr-3">Total Imported: <strong>{data.quantity + data.exports}</strong></p>
          <p className="mr-3">Quantity: <strong>{data.quantity}</strong></p>
          <p className="mr-3">Exports: <strong>{data.exports}</strong></p>
          <p className="mr-3">Purchase Price: <strong>{data.pp}</strong></p>
        </Fragment>}
        <p className="mr-3">Total Price: <strong>{data.total}</strong></p>
      </div>}
      <h5 className="text-center my-4">Items</h5>
      <div className="m-3  row mb-4 justify-content-center">
        {data.subItems.map(i => <SubItem key={i._id} {...i} /> )}
      </div>
      <p>Imported from <Link to={`/ventor/${data.vendor._id}`}>{data.vendor.name}</Link></p>
      <p>Imported by <Link to={`/ventor/${data.employee._id}`}>{data.employee.name}</Link></p>
      {data.expireDate && <p>Expire Date: <strong>{data.expireDate}</strong></p>}
      <p>Imported at <strong>{timeConverter(data.importedDate)}</strong></p>
      <p>Added at <strong>{timeConverter(data.createdAt)}</strong></p>
    </div>
  )
}
export default Import

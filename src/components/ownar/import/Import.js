import React,{ Fragment, useContext, useEffect, useState  } from 'react'
import { ImportContext } from '../../../store/ImportContext'
import { useParams } from 'react-router-dom'
import timeConverter from '../../../utils/timeConverter'
import { Link } from 'react-router-dom'

const SubItem = ({ _id, item, quantity, exports: exp, expireDate, pp }) => {
  return(
    <div className="col-md-6 col-lg-4 col-xl-3 my-3">
      <div className="light-border" style={{background:'#ffffff'}}>
        <p className="mb-2 border-bottom pb-1 h6">{item.name}</p>
        <small className="d-block">Imported: <span className="badge badge-info">{quantity+exp}</span></small>
        <small className="d-block">Quantity: <span className="badge badge-info">{quantity}</span></small>
        <small className="d-block">Purchase price: <span className="badge badge-info">{ pp }</span></small>
        <small className="d-block">Exports: <span className="badge badge-info">{ exp }</span></small>
        {expireDate && <small>Expire Date: {timeConverter(expireDate)}</small>}
      </div>
    </div>
  )
}


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

const Import = (props) => {
  const [data,setData] = useState({})
  const { importId } = useParams()
  const context = useContext(ImportContext)

  useEffect(() => {
    context.import(importId,setData)
  },[])

  return(
    Object.keys(data).length > 0 && <div className="col-11 p-3 light-border">
      <small className="d-block">Imported by <Link to={`/employee/${data.employee._id}`}><span className="badge">{data.employee.name}</span></Link> from <Link to={`/vendor/${data.vendor._id}`}><span className="badge">{data.vendor.name}</span></Link></small>
      {data.expireDate && <small>Expire Date: <strong>{data.expireDate}</strong></small>}
      <small className="d-block">Imported at <span className="badge badge-warning ">{data.importDate}</span></small>
      <small className="d-block">Added at <span className="badge badge-warning">{timeConverter(data.createdAt)}</span></small>
      {data.items.map((item,index) => <SingleImport key={index} {...item}/>)}
    </div>
  )
}
export default Import

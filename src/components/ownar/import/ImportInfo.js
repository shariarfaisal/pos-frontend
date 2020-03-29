import React from 'react'
import { Link } from 'react-router-dom'
import timeConverter from '../../../utils/timeConverter'


const ImportInfo = ({ title, note, employee, vendor, importDate, expireDate, createdAt }) => {
  const tn = Number(importDate)
  const time = new Date(tn ? tn : importDate )
  return (
    <div className="text-center mb-4">
      <h4>{title}</h4>
      {note && <p className="text-center text-muted p-2 my-2"><small>{note}</small></p>}
      <small className="d-block">Imported by <Link to={`/employee/${employee._id}`}><span className="badge">{employee.name}</span></Link> from <Link to={`/vendor/${vendor._id}`}><span className="badge">{vendor.name}</span></Link></small>
      {expireDate && <small>Expire Date: <strong>{expireDate}</strong></small>}
      <small className="d-block">Imported at <span className="badge badge-warning ">{`${time.getMonth()}/${time.getDate()}/${time.getFullYear()}`}</span></small>
      <small className="d-block">Added <span className="badge badge-warning">{timeConverter(createdAt)}</span></small>
    </div>
  )
}

export default ImportInfo

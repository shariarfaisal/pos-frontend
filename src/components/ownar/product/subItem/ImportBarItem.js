import React from 'react'
import { Link } from 'react-router-dom'
import timeConverter from '../../../../utils/timeConverter'

const ImportBarItem = ({ title, _id, vendor, employee, importDate, url }) => (
  <div className="list-group-item rounded-0 bg-light-blue">
    <p className="mb-0"><Link className="text-dark" to={`${url}/import/${_id}`}>{title}</Link></p>
    <small className="text-muted">Imported : <strong>{timeConverter(importDate,true)}</strong></small>
    <small className="d-block">By <Link to={`/employee/${employee._id}`}>{employee.name}</Link> from <Link to={`/vendor/${vendor._id}`}>{vendor.name}</Link></small>
  </div>
)


export default ImportBarItem

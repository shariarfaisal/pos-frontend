import React from 'react'
import { Link } from 'react-router-dom'


const ImportInfo = ({ title, employee, vendor, note, importDate }) => {
  return(
    <div className="text-center my-4 py-2">
      <h4>{title}</h4>
      <p className="mb-0 text-muted">By <Link to={`/employee/${employee._id}`}><span className="badge">{employee.name}</span></Link> from <Link to={`/vendor/${vendor._id}`}><span className="badge">{vendor.name}</span></Link></p>
      <small className="text-muted">Import date <span className="badge badge-warning">{importDate}</span></small>
      {note && <div className="p-3">
        <small>{note}</small>
      </div>}
    </div>
  )
}

export default ImportInfo

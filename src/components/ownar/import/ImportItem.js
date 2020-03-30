import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import timeConverter from '../../../utils/timeConverter'
import strConvert from '../../../utils/strConvert'

const ImportItem = ({ _id, items, importDate, employee, vendor, title, createdAt }) => {
  const history = useHistory()
  const tn = Number(importDate)
  const time = new Date(tn ? tn : importDate )
  return(
    <div onDoubleClick={e => history.push(`/import/${_id}`)} className="col-md-6 col-lg-4 my-2">
      <div className="light-border text-center pt-2">
        <div className="d-flex justify-content-end">
          <small className="badge badge-info">
            {`${time.getMonth()}/${time.getDate()}/${time.getFullYear()}`}
          </small>
        </div>
        <p className="mb-0"><Link className="text-dark" to={`/import/${_id}`}>{strConvert(title,30)}</Link></p>
        <small className="text-muted d-block">By <Link to={`/employee/${employee._id}`}>{employee.name}</Link> from <Link to={`/vendor/${vendor._id}`}>{vendor.name}</Link></small>
        <small className="text-muted"> Added  <span className="badge badge-warning">{timeConverter(createdAt)}</span></small>
      </div>
    </div>
  )
}

export default ImportItem

import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import timeConverter from '../../../utils/timeConverter'

const ImportItem = ({ _id, item, importedDate, subItems, total, quantity, exports: exp }) => {
  const history = useHistory()
  return(
    <div onDoubleClick={e => history.push(`/import/${_id}`)} className="list-group-item light-border my-1">
      <div className="m-0 d-flex justify-content-between align-items-center">
        <Link style={{textDecoration: 'none'}} className="h4" to={`/import/${_id}`}>{item.name} <span className="text-muted h6">#{item.code}</span> {(quantity || exp ) && <span className="badge badge-warning">{quantity + exp}</span>} </Link>
        <small className="text-muted d-block">Imported At :<strong> {timeConverter(importedDate)}</strong></small>
      </div>
      {subItems && subItems.length > 0 && <p className="m-0">Items: <strong> {subItems.length} </strong></p>}
      <p className="m-0">Total Expense: <strong>{total}</strong></p>
    </div>
  )
}

export default ImportItem

import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import timeConverter from '../../../utils/timeConverter'

const ImportItem = ({ _id, items, importDate }) => {
  const history = useHistory()
  return(
    <div onDoubleClick={e => history.push(`/import/${_id}`)} className="col-md-6 col-lg-4 col-xl-3 my-2">
      <div className="light-border">
        <Link to="">{importDate}</Link>
      </div>
    </div>
  )
}

export default ImportItem

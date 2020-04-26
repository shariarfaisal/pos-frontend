import React,{ useContext, useState } from 'react'
import {Link, withRouter } from 'react-router-dom'
import CloneCorner from '../../../CloneCorner'
import { ItemLocalContext } from './ItemLocalContext'
import UpdateItem from './UpdateItem'

const ItemBlock = ({ name, _id, code, match, history,brand }) => {
  const { getUpdateItemName } = useContext(ItemLocalContext)
  const [updateMode,setUpdateMode] = useState(false)

  return (
    <div onDoubleClick={e => history.push(`${match.url}/${_id}`)} className="col-md-6 col-lg-4 my-2">
      {!updateMode && <div className="p-2 light-border min-h-1">
        <div className="d-flex justify-content-between">
          <h6>
            <Link className="text-dark" to={`${match.url}/${_id}`}>{name}</Link>
          </h6>
          <CloneCorner>
            <div onClick={e => setUpdateMode(true)} className="item">Update name</div>
            <div onClick={e => history.push(`${match.url}/${_id}`)} className="item">View</div>
          </CloneCorner>
        </div>
        <small className="text-muted">@{code}</small>
      </div>}
      {updateMode && <UpdateItem id={_id} name={name} setUpdateMode={setUpdateMode} getUpdateItemName={getUpdateItemName}/>}
    </div>
  )
}


export default withRouter(ItemBlock)

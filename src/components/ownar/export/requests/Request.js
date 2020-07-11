import React from 'react'
import timeConverter from '../../../../utils/timeConverter'
import { Link, useHistory } from 'react-router-dom'


const Request = ({ _id, branch, status, message, createdAt, acceptRequest }) => {
  const history = useHistory()

  const acceptHandler = async (e) => {
    if(status === 'process'){
      history.push(`/export/requests/${_id}`)
    }else if(status === 'pending'){
      const get = await acceptRequest(_id)
      if(get.data){
        history.push(`/export/requests/${_id}`)
      }
    }
  }

  return(
    <div className="request list-group-item gray-border py-2 my-1">
      <div className="content d-flex justify-content-between">
        <div>
          <h5 className="mb-0">{branch.name}</h5>
          <small className="text-muted">{message}</small>
        </div>
        <div>
          <button
            onClick={acceptHandler}
            type="button"
            className="btn px-md-3 btn-sm btn-gray border"
          >{status === 'process' ? 'get' : 'take it'}</button>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <small className="text-muted">{timeConverter(createdAt)}</small>
      </div>
    </div>
  )
}
export default Request

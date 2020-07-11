import React,{ useContext, useEffect } from 'react'
import { ExportLocalContext } from '../ExportLocalContext'
import Request from './Request'


const Requests = (props) => {
  const { requests, getSetRequests, acceptRequest } = useContext(ExportLocalContext)

  useEffect(() => {
    getSetRequests()
  },[])


  return(
    <div className="requests col-xl-11">
      <div className="list-group">
        {requests && requests.map((request,i) => <Request acceptRequest={acceptRequest} key={i} {...request} />)}
      </div>
    </div>
  )
}
export default Requests

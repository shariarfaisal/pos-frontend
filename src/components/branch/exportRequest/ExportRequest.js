import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import statusControl from './statusControl'
import ExportRequestItems from './ExportRequestItems'
import timeConverter from '../../../utils/timeConverter'


const getRequest = async (id,set) => {
  const res = await axios.get(`http://localhost:1000/api/exportRequest/${id}`)
  if(res){
    set(res.data)
  }
}

const RequestInfo = ({ title, message, status, createdAt }) => {
  return (
    <div className="py-3 mb-5 text-center">
      <h4>{title} <span className={`ml-4 badge badge-${statusControl(status)}`}>{status}</span> </h4>
      {message && <p className="text-muted mb-0">{message}</p>}
      <small>created <span className="badge badge-warning">{timeConverter(createdAt)}</span></small>
    </div>
  )
}


const ExportRequest = (props) => {
  const { requestId } = useParams()
  const [request,setRequest] = useState(null)

  useEffect(() => {
    getRequest(requestId,setRequest)
  },[])

  return(
    <div className="col-lg-11">
      {request && <RequestInfo {...request} />}
      {request && <ExportRequestItems  {...request} />}
    </div>
  )
}
export default ExportRequest

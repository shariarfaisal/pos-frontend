import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import RequestItem from './RequestItem'

const getRequests = async (setRequests) => {
  const res = await axios.get('http://localhost:1000/api/exportRequest/branch')
  if(res){
    setRequests(res.data)
  }
}

const Requests = (props) => {
  const [requests,setRequests] = useState([])

  useEffect(() => {
    getRequests(setRequests)
  },[])

  return(
    <div className="requests">
      <div className="row py-4">
        {requests.map((req,i) => <RequestItem key={i} {...req} /> )}
      </div>
    </div>
  )
}
export default Requests

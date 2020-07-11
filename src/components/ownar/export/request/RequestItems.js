import React from 'react'
import RequestItem from './RequestItem'


const RequestItems = ({ items }) => {
  return (
    <div className="request-items">
      <div className="row w-100 mt-5">
        {items.map((item,i) => <RequestItem key={i} {...item} />)}
      </div>
    </div>
  )
}


export default RequestItems

import React from 'react'

const NoItem = (props) => { 
  return(
    <div className="col-sm-6 col-md-4 col-lg-3 my-2">
      <div className="p-3 gray-border shadow">
        <div className="d-flex justify-content-between">
          <h6 className="m-0">No Item Found</h6>
        </div>
      </div>
    </div>
  )
}
export default NoItem

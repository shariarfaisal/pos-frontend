import React from 'react'

const MsgBox = ({ error, success }) => {
return(
  <div className="employee-create--errbox p-3">
    {error && Object.keys(error).map((item,i) => {
      return <p key={i}>{error[item]}</p>
    })}
    {success && <p className="text-success">{success}</p>}
  </div>
  )
}
export default MsgBox

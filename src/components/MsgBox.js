import React,{ memo } from 'react'

const MsgBox = ({ error, success }) => {
return(
  (error || success ) && <div className="employee-create--errbox p-3">
    {error && Object.keys(error).map((item,i) => {
      return <p key={i}>{error[item]}</p>
    })}
    {success && <p className="text-success">{success}</p>}
  </div>
  )
}
export default memo(MsgBox)

import React,{ useState } from 'react'

const CloneCorner = ({ children }) => {
  const [show,setShow] = useState(false)
  return (
    <div className="clone-corner">
      <div onClick={e => setShow(!show)} className="clone">:</div>
      {show && <div onMouseLeave={e => setShow(false)} className="body">
        {children}
      </div>}
    </div>
  )
}


export default CloneCorner

import React,{ memo } from 'react'

const ModalFooter = ({ show, setShow }) => {
return(
  <div className="d-flex justify-content-end">
    <button onClick={e => setShow(false)} type="button" className="btn btn-sm btn-light text-primary mx-2 px-2">Cansel</button>
    <button type="submit" className="btn btn-sm btn-light text-primary px-2 mx-2">Submit</button>
  </div>
  )
}
export default memo(ModalFooter)

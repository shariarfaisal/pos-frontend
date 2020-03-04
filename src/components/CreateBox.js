import React from 'react'

const CreateBox = ({ children, title, setShow }) => {
  return (
    <div className="pb-4">
      <button onClick={e => setShow(true)} type="button" className="btn btn-outline-light text-primary px-4"><i className="fa fa-plus text-success"></i> { title }</button>
      { children }
    </div>
  )
}
 
export default CreateBox

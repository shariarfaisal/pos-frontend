import React from 'react'

const CreateBox = ({ children, title, setShow }) => {
  return (
    <div className="pb-4">
      <button title={title} onClick={e => setShow(true)} type="button" className="btn btn-light-blue rounded-circle text-primary"><i className="fa fa-plus text-success p-2" style={{fontSize: '22px'}}></i></button>
      { children }
    </div>
  )
}

export default CreateBox

import React,{ Fragment, useState } from 'react'
import TypeUpdateModal from './TypeUpdateModal'
import TypeDeleteModal from './TypeDeleteModal'




const TableRow = ({ i, _id, name }) => {
  const [show,setShow] = useState(false)
  const [showD,setShowD] = useState(false)
  
  return(
    <Fragment>
      <TypeUpdateModal id={_id} name={name} show={show} setShow={setShow} />
      <TypeDeleteModal id={_id} show={showD} setShow={setShowD} />
      <tr>
        <th scope="row">{i+1}</th>
        <td><a className="text-dark" href={`/type/${_id}`}>{name}</a></td>
        <td className="d-flex align-items-center action">
          <div onClick={e => setShowD(true)} className="mx-2 text-danger action-delete"><i className="fa fa-trash"></i></div>
          <div onClick={e => setShow(true)} className="mx-2 text-muted action-edit"><i className="fa fa-edit"></i></div>
        </td>
      </tr>
    </Fragment>
  )
}


export default TableRow

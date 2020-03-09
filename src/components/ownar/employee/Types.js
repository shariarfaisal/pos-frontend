import React,{ useEffect, useState, useContext } from 'react'
import Thead from './Thead'
import TableRow from './TableRow'
import { EmployeeTypeContext } from '../../../store/EmployeeTypeContext'
import TypeCreate from './TypeCreate'
import { Link, useHistory } from 'react-router-dom'
import CreateBox from '../../CreateBox'

const TypeItem = ({ _id, name }) => {
  const history = useHistory()
  return (
    <div onDoubleClick={e => history.push(`/employee/type/${_id}`)} className="col-sm-6 col-md-4 col-lg-3 my-2">
      <div className="p-3 light-border">
        <h6 className="m-0"><Link className="text-dark" to={`/employee/type/${_id}`}>{name}</Link></h6>
      </div>
    </div>
  )
}

const Types = ({ size }) => {
  const [show,setShow] = useState(false)
  const context = useContext(EmployeeTypeContext)

  return(
    <div className="col-10 employee-type--items mt-2 p-0">
      <CreateBox setShow={setShow} title="Create New Employee">
        <TypeCreate show={show} setShow={setShow} />
      </CreateBox>
      <div className="row">
        {context.employeeTypes.map((item,i) => <TypeItem key={item._id} {...item} i={i} />)}
      </div>
    </div>
    )
}

// <div className="col-md-10 col-lg-8 ">
//   <table className="table border">
//     <Thead />
//     <tbody>
//       {context && context.employeeTypes.map((item,i) => <TableRow key={item._id} {...item} i={i} />)}
//     </tbody>
//   </table>
// </div>

export default Types

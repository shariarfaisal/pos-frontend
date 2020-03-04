import React,{ useEffect, useState, useContext } from 'react'
import Thead from './Thead'
import TableRow from './TableRow'
import { EmployeeTypeContext } from '../../store/EmployeeTypeContext'
import TypeCreate from './TypeCreate'
import CreateBox from '../CreateBox'


const Type = ({ size }) => {
  const [show,setShow] = useState(false)
  const context = useContext(EmployeeTypeContext)

  return(
    <div className="col-10 employee-type--items mt-2 p-0">
      <CreateBox setShow={setShow} title="Create New Employee">
        <TypeCreate show={show} setShow={setShow} />
      </CreateBox>
      <div className="row">
        <div className="col-md-10 col-lg-8 ">
          <table className="table border">
            <Thead />
            <tbody>
              {context && context.employeeTypes.map((item,i) => <TableRow key={item._id} {...item} i={i} />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )
}


export default Type

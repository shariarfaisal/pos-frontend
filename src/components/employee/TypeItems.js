import React,{ useEffect, useState, useContext } from 'react'
import Thead from './Thead'
import TableRow from './TableRow'
import { EmployeeTypeContext } from '../../store/EmployeeTypeContext'


const TypeItems = ({ size }) => {
  const context = useContext(EmployeeTypeContext)

  return(
    <div className={`${size} employee-type--items my-4 p-0`}>
      <table className="table border">
        <Thead />
        <tbody>
          {context && context.employeeTypes.map((item,i) => <TableRow key={item._id} {...item} i={i} />)}
        </tbody>
      </table>
    </div>
    )
}


export default TypeItems

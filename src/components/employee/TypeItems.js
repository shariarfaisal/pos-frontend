import React,{ useEffect, useState } from 'react'
import Thead from './Thead'
import TableRow from './TableRow'
import axios from 'axios'

const getData = async (set) => {
  const data = await axios.get('http://localhost:1000/api/employeeType')
  if(data){
    set(data.data)
  }
}

const TypeItems = ({ size }) => {
  const [items,setItems] = useState([])

  useEffect(() => {
    getData(setItems)
  },[])

  return(
    <div className={`${size} employee-type--items my-4 p-0`}>
      <table className="table border">
        <Thead />
        <tbody>
          {items.map((item,i) => <TableRow key={item._id} {...item} i={i} />)}
        </tbody>
      </table>
    </div>
    )
}


export default TypeItems

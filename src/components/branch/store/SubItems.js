import React,{ useContext, useEffect, useState } from 'react'
import { ProductSubItemContext } from '../../../store/ProductSubItemContext'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import SubItemBlock from './SubItemBlock'

const getBranchSubItems= async (id,set) => {
  const get = await axios.get(`http://localhost:1000/api/branchItem/${id}`)
  try{
    const res = get.data.subItems.reduce((a,b) => {
      a[b.item] = b
      return a
    },{})
    set(res)
  }catch(err){
    set({})
  }
}

const SubItems = (props) => {
  const { subItems } = useContext(ProductSubItemContext)
  const [branchSubItems,setBranchSubItems] = useState({})
  const { itemId } = useParams()

  useEffect(() => {
    getBranchSubItems(itemId,setBranchSubItems)
  },[])

  return(
    <div className="col-xl-11">
      <div className="row">
        {subItems.map((item,i) => <SubItemBlock branchSubItem={branchSubItems[item._id]} key={i} {...item} /> )}
      </div>
    </div>
  )
}
export default SubItems

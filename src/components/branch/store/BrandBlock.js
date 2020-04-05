import React,{ useEffect, useState } from 'react'
import ItemBlock from './ItemBlock'
import axios from 'axios'

const getBranchItems = async (set) => {
  const get = await axios.get(`http://localhost:1000/api/branchItem`)
  try{
    const res = get.data.reduce((a,b) => {
      a[b.item._id] = b
      return a
    },{})
    set(res)
  }catch(err){
    set({})
  }
}


const BrandBlock = ({ info, items}) => {
  const [branchItems,setBranchItems] = useState(null)

  useEffect(() => {
    getBranchItems(setBranchItems)
  },[])

  return (
    <div className="col-12 my-2">
      <div className="py-3">
        <h5>{info.name}</h5>
      </div>
      <div className="row ml-2">
        {branchItems && items.map((item,i) => <ItemBlock wishList={branchItems[item._id]} key={i} {...item} />)}
      </div>
    </div>
  )
}


export default BrandBlock

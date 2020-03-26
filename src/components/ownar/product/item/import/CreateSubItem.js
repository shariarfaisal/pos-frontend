import React,{ useEffect, useState } from 'react'
import ItemInput from './ItemInput'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const getSubItem = async (id,set) => {
  const res = await axios.get(`http://localhost:1000/api/subItem/${id}`)
  if(res){
    set(res.data)
  }
}

const CreateSubItem = ({ importItemId, subItemId, setSubItemId }) => {
  const { importId } = useParams()
  const [item,setItem] = useState(null)
  const [quantity,setQuantity] = useState(1)
  const [pp,setPp] = useState(0)
  const [error,setError] = useState('')
  const [expireDate,setExpireDate] = useState('')

  useEffect(() => {
    getSubItem(subItemId,setItem)
  },[])

  const submitHandler = async e => {
    e.preventDefault()
    if(quantity && pp){
      try{
        const subImp = await axios.post(`http://localhost:1000/api/import/${importId}/${importItemId}/sub`,{
          item: subItemId, quantity, pp, expireDate
        })
        if(subImp){
          setError('')
          setSubItemId('')
        }
      }catch(err){
        setError(err.response.data)
      }
    }
  }

  return (
    item && <div className="col-12 my-2">
      <div className="light-border">
        <h6 className="mb-3 text-center text-muted">{item.name}</h6>
        <form onSubmit={submitHandler} className="row justify-content-left">
          <div className="col-12">
            {error && Object.keys(error).map((er,i) => <p key={i} className="text-danger text-center">{error[er]}</p>)}
          </div>
          <ItemInput value={quantity} set={setQuantity} type="number" plc="Quantity" id="quantity"/>
          <ItemInput value={pp} set={setPp} type="number" plc="Purchase Price" id="pp"/>
          <ItemInput value={expireDate} set={setExpireDate} type="number" plc="Expire Date" id="expireDate"/>
          <div className="col-12 mt-3 text-right">
            <button onClick={e => setSubItemId('')} type="button" className="btn btn-light btn-sm text-primary mx-1 px-4">cancel</button>
            <button type="submit" className="btn btn-light btn-sm text-primary mx-1 px-4">add</button>
          </div>
        </form>
      </div>
    </div>
  )
}


export default CreateSubItem

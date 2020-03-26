import React,{ useState, useContext } from 'react'
import Input from './Input'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CreateItem = ({ impt, setImpt }) => {
  const { itemId, importId } = useParams()
  const [quantity,setQuantity] = useState(0)
  const [pp,setPp] = useState(0)
  const [expireDate,setExpireDate] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const submitHandler = async e => {
    e.preventDefault()
    try{
      const createItem = await axios.post(`http://localhost:1000/api/import/${importId}/item`,{
        item: itemId,quantity, pp, expireDate
      })
      if(createItem){
        setSuccess("Item added!")
        setQuantity(0)
        setPp(0)
        setExpireDate('')
        const ximpt = impt
        ximpt.items.push(createItem.data)
        setImpt(ximpt)
      }
    }catch(err){
      setSuccess('')
      setError(err.response.data)
    }
  }

  return(
    <form onSubmit={submitHandler} className="row light-border">
      <div className="col-12 text-center py-2">
        {success && <p className="text-success mb-0">{success}</p>}
        {error && Object.keys(error).map((er,i) => <p key={i} className="text-danger mb-0">{error[er]}</p>)}
      </div>
      <Input type="number" value={quantity} setValue={setQuantity} id="quantity" title="Quantity" />
      <Input type="number" value={pp} setValue={setPp} id="pp" title="Purchase Price" />
      <Input type="text" value={expireDate} setValue={setExpireDate} id="expire" title="Expire Date" />
      <div className="col-12 mt-3">
        <button type="submit" className="btn btn-sm btn-info px-4">add item</button>
      </div>
    </form>
  )
}


export default CreateItem

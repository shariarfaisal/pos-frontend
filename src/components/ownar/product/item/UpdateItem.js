import React,{ useState } from 'react'

const UpdateItem = ({ id, name: nme, setUpdateMode, getUpdateItemName }) => {
  const [name,setName] = useState(nme)
  const [error,setError] = useState('')

  const submitHandler = async e => {
    e.preventDefault()
    const get = await getUpdateItemName(id,{ name })
    if(get.data) setUpdateMode(false)
    if(get.error){
      setError(get.error.data)
    }
  }

  return(
    <div className="p-2 light-border min-h-1">
      <form onSubmit={submitHandler} className="row">
        <div className="col-12">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="form-control form-control-sm"
            placeholder="Name"
          />
          {error.name && <small className="text-danger">{error.name}</small>}
        </div>
        <div className="col-12 mt-2 d-flex justify-content-end">
          <button onClick={e => setUpdateMode(false)} type="button" className="btn btn-sm btn-light font-6 mx-2">Cancel</button>
          <button type="submit" className="btn btn-sm btn-light-blue font-6">Save</button>
        </div>
      </form>
    </div>
  )
}
export default UpdateItem

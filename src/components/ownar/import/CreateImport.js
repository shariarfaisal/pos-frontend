import React,{ useState, useContext } from 'react'
import InputSection from './InputSection'
import { VendorContext } from '../../../store/VendorContext'
import axios from 'axios'


const getTime = (time) => {
  const t = time
  return `${t.getMonth()+1}-${t.getDate()}-${t.getFullYear()}`
}

const CreateImport = (props) => {
  const [vendor,setVendor] = useState('')
  const [importDate,setImportDate] = useState(getTime(new Date()))
  const [title,setTitle] = useState('')
  const [note,setNote] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const {vendors} = useContext(VendorContext)

  const submitHandler = async e => {
    e.preventDefault()
    if(vendor && importDate && title){
      try{
        const post = await axios.post('http://localhost:1000/api/import/',{ vendor, importDate, title, note })
        if(post){
          setSuccess("New Import Created!")
          setError('')
          setVendor('')
          setTitle('')
          setImportDate(getTime(new Date()))
          setNote('')
        }
      }catch(err){
        setSuccess('')
        setError(err.response.data)
      }
    }
  }

  return(
    <div className="col-12">
      <button data-toggle="collapse" data-target="#createImport" className="btn btn-sm btn-light text-success my-3" type="button">
        <i className="fa fa-plus"></i> Create Import
      </button>
      <div className="collapse mb-4" id="createImport">
        <div className="light-border">
          <form onSubmit={submitHandler} className="row">
            {success && <p className="text-success text-center mb-0 my-2 col-12">{success}</p>}
            {error && <div className="text-center col-12 my-2">
              {Object.keys(error).map((e,i) => {
                return <p key={i} className="text-danger mb-0 text-center">{error[e]}</p>
              })}
            </div>}
            <InputSection className="col-12" id="title" title="Title">
              <input
                id="title"
                type="text"
                required={true}
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="form-control"
              />
            </InputSection>
            <InputSection className="col-md-6" id="vendor" title="Vendor">
              <select
                id="vendor"
                className="form-control"
                value={vendor}
                onChange={e => setVendor(e.target.value)}
              >
                <option value=''>Select Vendor</option>
                {vendors && vendors.map((v,i) => <option key={i} value={v._id}>{v.name}</option>)}
              </select>
            </InputSection>
            <InputSection className="col-md-6" id="importDate" title="Import Date">
              <input
                id="importDate"
                type="text"
                placeholder="Import Date"
                required={true}
                value={importDate}
                onChange={e => setImportDate(e.target.value)}
                className="form-control"
              />
            </InputSection>
            <InputSection className="col-12" id="note" title="Note">
              <textarea
                id="note"
                className="form-control"
                placeholder="Note ..."
                value={note}
                onChange={e => setNote(e.target.value)}
              ></textarea>
            </InputSection>
            <div className="col-12">
              <button type="submit" className="btn btn-sm btn-info px-4">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default CreateImport

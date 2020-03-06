import React,{ useState, useContext } from 'react'
import { VendorContext } from '../../store/VendorContext'
import CustomModal from '../CustomModal'
import MsgBox from '../MsgBox'
import Input from './Input'

const Create = ({ show, setShow }) => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [address,setAddress] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const context = useContext(VendorContext)

  const submitHandler = async e => {
    e.preventDefault()
    if(name && email && phone && address){
      const vendor = await context.getPost({ name, email, phone, address })
      if(vendor.success){
        setSuccess(vendor.success)
        context.setVendors([...context.vendors,vendor.data.data])
        setName('')
        setEmail('')
        setPhone('')
      }else{
        setError(vendor.error)
      }
    }
  }

  return(
    <CustomModal
        show={show}
        setShow={setShow}
        submitHandler={submitHandler}
        title="Create New Vendor"
      >
      <MsgBox error={error} success={success} />
      <Input value={name} set={setName} id="name" type="text" title="Full Name" />
      <Input value={email} set={setEmail} id="email" type="email" title="Email" />
      <Input value={phone} set={setPhone} id="phone" type="text" title="Phone" />
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          className="form-control"
          value={address}
          onChange={e => setAddress(e.target.value)}
          cols=""
          rows=""></textarea>
      </div>
    </CustomModal>
  )
}


export default Create

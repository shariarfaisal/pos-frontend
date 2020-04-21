import React,{ useState, useContext } from 'react'
import { ProfileLocalContext } from './ProfileLocalContext'
import UpdateProfileModal from './UpdateProfileModal'
import { useHistory } from 'react-router-dom'

const UpdateProfile = ({ show, setShow, info }) => {
  const [name,setName] = useState(info.name)
  const [email,setEmail] = useState(info.email)
  const [username,setUsername] = useState(info.username)
  const [phone,setPhone] = useState(info.phone)
  const [errors,setErrors] = useState({})
  const { location, replace } = useHistory()
  const { getUpdate } = useContext(ProfileLocalContext)

  const cancelBtnHandler = () => {
    location.search = location.search.replace('update=true','update=false')
    replace(location.pathname+location.search)
    setShow(false)
  }

  const submitHandler = async e => {
    e.preventDefault()
    const { error, data } = await getUpdate({ name, email, username, phone })
    if(data) cancelBtnHandler()
    else if(error) setErrors(error.data)
  }

  return(
    <UpdateProfileModal
      show={show}
      setShow={setShow}
      title="Update Profile"
      submitHandler={submitHandler}
    >
      <div className="row">
        <div className="form-group col-lg-6">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>
        <div className="form-group col-lg-6">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
          />
          {errors.username && <small className="text-danger">{errors.username}</small>}
        </div>
        <div className="form-group col-lg-6">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>
        <div className="form-group col-lg-6">
          <label htmlFor="phone">Phone</label>
          <input
            className="form-control"
            type="text"
            id="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="Phone"
          />
          {errors.phone && <small className="text-danger">{errors.phone}</small>}
        </div>
        <div className="col-12 d-flex justify-content-end mt-5">
          <button onClick={cancelBtnHandler} type="button" className="btn btn-sm btn-light mx-2 font-6 border">Cancel</button>
          <button type="submit" className="btn btn-sm btn-light mx-2 font-6 border">Save</button>
        </div>
      </div>
    </UpdateProfileModal>
  )
}
export default UpdateProfile

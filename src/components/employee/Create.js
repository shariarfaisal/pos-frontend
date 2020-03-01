import React from 'react'
import ErrBox from './ErrBox'


const Create = (props) => {
return(
  <div className="col-md-10 col-lg-8 employee-create--form bg-light">
    <ErrBox />
    <form className=""  method="post">
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input type="text" className="form-control form-control-sm" placeholder="Name" name="" value="" />
      </div>
      <div className="form-group">
        <label htmlFor="">E-mail</label>
        <input type="email" className="form-control form-control-sm" placeholder="E-mail" name="" value="" />
      </div>
      <div className="form-group">
        <label htmlFor="">Username</label>
        <input type="text" className="form-control form-control-sm" placeholder="Username" name="" value="" />
      </div>
      <div className="form-group">
        <label htmlFor="">Type</label>
        <select className="form-control" name="">
          <option value="">Select One</option>
          <option value="">Admin</option>
          <option value="">Sale Manager</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="">Password</label>
        <input type="password" className="form-control form-control-sm" placeholder="Password" name="" value="" />
      </div>
      <div className="form-group">
        <label htmlFor="">Confirm Password</label>
        <input type="password" className="form-control form-control-sm" placeholder="Confirm Password" name="" value="" />
      </div>
      <button type="submit" className="btn btn-sm px-4 btn-info" name="button">Submit</button>
    </form>
  </div>
  )
}
export default Create

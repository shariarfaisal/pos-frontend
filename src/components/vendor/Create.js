import React from 'react'

const Create = (props) => {
return(
  <div className="col-md-10 col-lg-8 light-border">
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" className="form-control form-control-sm" placeholder="Name" value="" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="text" className="form-control form-control-sm" placeholder="Phone" value="" />
      </div>
      <button type="submit" className="btn btn-sm btn-info px-4">Submit</button>
    </form>
  </div>
  )
}
export default Create

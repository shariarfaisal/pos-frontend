import React from 'react'


const Create = (props) => {
return(
  <div className="col-md-8 col-lg-6 light-border p-3">
    <form>
      <div className="form-group">
        <label htmlFor="name">Category Name</label>
        <input type="text" className="form-control form-control-sm" placeholder="Category" value="" />
      </div>
      <button type="submit" className="btn btn-sm btn-info px-4">Submit</button>
    </form>
  </div>
  )
}
export default Create

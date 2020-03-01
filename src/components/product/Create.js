import React from 'react'

const Create = (props) => {
return(
  <div className="col-md-10 col-lg-8 light-border">
    <form>
      <div className="form-group">
        <label htmlFor="name">Product Name</label>
        <input type="text" className="form-control form-control-sm" placeholder="Product Name" name="" value="" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Product Category</label>
        <select className="form-control form-control-sm">
          <option value="">Select One</option>
          <option value="1">Electronics</option>
          <option value="1">Cloths</option>
        </select>
      </div>
      <button type="submit" className="btn btn-sm btn-info px-4">Submit</button>
    </form>
  </div>
  )
}
export default Create

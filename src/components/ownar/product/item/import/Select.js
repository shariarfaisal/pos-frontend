import React,{ memo } from 'react'

const Select = ({ value, handleChange, items }) => {
  return(
    <div className="col-md-10 mx-4 p-0">
      <button
        type="button"
        data-toggle="collapse"
        data-target="#itemBtn"
        className=" mb-3 btn btn-sm btn-outline-light text-dark"
      >
        <i className="fa fa-plus text-success"></i> Add Items
      </button>
      <div id="itemBtn" className=" collapse pb-3">
        <select
          value={value}
          onChange={handleChange}
          className="selectpicker light-border  form-control w-100"
          multiple
          data-live-search="true"
          style={{height: '200px',background: '#fff'}}
        >
          {
            items.map((item,index) => <option key={index} value={item._id}>{item.name}</option>)
          }
        </select>
      </div>
    </div>
  )
}
export default memo(Select)

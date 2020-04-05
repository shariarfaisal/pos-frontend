import React,{ useState } from 'react'

const ItemBlock = ({ item, _id, subItems }) => {
  const [show,setShow] = useState(false)
  return(
    <div className="col-lg-6 my-2">
      <div className="gray-border py-2">
        <div className="d-flex justify-content-between">
          <h6 className="mb-0 h6"><strong className="badge border bg-white">{subItems.length} </strong> {item.name} <small className="text-muted pl-2">@{item.code}</small></h6>
          <div className="text-muted">
            {show && <i onClick={e => setShow(false)} className="fa fa-minus text-red-h pointer"></i>}
            {!show && <i onClick={e => setShow(true)} className="fa fa-plus text-red-h pointer"></i>}
          </div>
        </div>
        {show && <div style={{height: '300px'}}>
          <div className='row mt-3' style={{maxHeight: '500px',overflowY: 'auto'}}>
            {subItems.map((sub,i) => {
              return(
                <div key={i} className="col-md-6 col-lg-12 my-2">
                  <div className="gray-border bg-white py-2">
                    <p className="mb-0">{sub.item.name} <small className="text-muted">@{sub.item.code}</small></p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>}
      </div>
    </div>
  )
}

export default ItemBlock

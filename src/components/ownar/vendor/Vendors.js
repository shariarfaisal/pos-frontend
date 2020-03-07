import React,{ useState, useContext } from 'react'
import { VendorContext }  from '../../../store/VendorContext'
import VendorSearch from './VendorSearch'
import VendorItem from './VendorItem'
import Create from './Create'
import CreateBox from '../../CreateBox'

const Vendors = (props) => {
  const [show,setShow] = useState(false)
  const context = useContext(VendorContext)

  return(
    <div className="col-12 p-3">
      <CreateBox setShow={setShow} title="Create New">
        <Create show={show} setShow={setShow}/>
      </CreateBox>
      <div className="row">
        {context.vendors.map((vendor,i) => <VendorItem key={i} {...vendor} /> )}
      </div>
    </div>
  )
}
export default Vendors

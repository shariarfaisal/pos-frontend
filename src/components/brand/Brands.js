import React,{ useState, useContext } from 'react'
import { BrandContext } from '../../store/BrandContext'
import BrandItem from './BrandItem'
import Create from './Create'
import CreateBox from '../CreateBox'


const Brands = (props) => {
  const [show,setShow] = useState(false)
  const context = useContext(BrandContext)

  return(
    <div className="brand-items col-12 col-xl-11">
      <CreateBox setShow={setShow} title="Create New Brand">
        <Create show={show} setShow={setShow}/>
      </CreateBox>
      <div className="row">
        {context && context.brands.map((brand,i) => <BrandItem key={i} {...brand} /> )}
      </div>
    </div>
  )
}
export default Brands

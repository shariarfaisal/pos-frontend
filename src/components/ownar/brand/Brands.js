import React,{ useState, useContext, useEffect } from 'react'
import BrandItem from './BrandItem'
import Create from './Create'
import CreateBox from '../../CreateBox'
import { BrandLocalContext } from './BrandLocalContext'


const Brands = (props) => {
  const [show,setShow] = useState(false)
  const { brands, getSetBrands } = useContext(BrandLocalContext)

  useEffect(() => {
    getSetBrands()
  },[])

  return(
    <div className="brand-items col-12 col-xl-11">
      {brands && <CreateBox setShow={setShow} title="Create New Brand">
        <Create show={show} setShow={setShow}/>
      </CreateBox>}
      <div className="row">
        {brands && brands.map((brand,i) => <BrandItem key={i} {...brand} /> )}
      </div>
    </div>
  )
}
export default Brands

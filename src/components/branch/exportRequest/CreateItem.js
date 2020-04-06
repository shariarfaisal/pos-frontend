import React,{ useState, useContext } from 'react'
import CreateItemModal from './CreateItemModal'
import { ExportRequestContext } from './ExportRequestContext'
import ActionButtons from './ActionButtons'

const CreateItem = (props) => {
  const [show,setShow] = useState(false)
  const { requestId } = useContext(ExportRequestContext)


  return(
    <div className="mb-4 create-item">
      <ActionButtons setShow={setShow}/>
      <div className="collapse mt-4" id="createItem">
        <CreateItemModal show={show} setShow={setShow} />
      </div>
    </div>
  )
}
export default CreateItem

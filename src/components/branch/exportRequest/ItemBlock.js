import React,{ useState, useContext } from 'react'
import CreateSubItem from './CreateSubItem'
import { ExportRequestContext } from './ExportRequestContext'
import SubItemBlock from './SubItemBlock'
import ItemBlockInfo from './ItemBlockInfo'



const ItemBlock = ({ subItems, _id, item, quantity, status }) => {
  const [createMode,setCreateMode] = useState(false)
  const { requestId } = useContext(ExportRequestContext)

  return (
    <div className="col-xl-6 my-2 item-block">
      <div className="gray-border py-2">
        <ItemBlockInfo
          item={item}
          itemId={_id} 
          itemLength={subItems.length}
          setCreateMode={setCreateMode} quantity={quantity}
        />
        {createMode &&
          <CreateSubItem
            itemId={_id}
            setCreateMode={setCreateMode}
          />
        }
        {subItems.length > 0 && <div className="pt-3 row scroll" style={{maxHeight: '300px',overflowY: 'auto'}}>
          {subItems.map((sub,i) => <SubItemBlock itemId={_id} key={i} {...sub} /> )}
        </div>}
      </div>
    </div>
  )
}

export default ItemBlock

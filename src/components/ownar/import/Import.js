import React,{ Fragment, useContext, useEffect, useState  } from 'react'
import { ImportContext } from '../../../store/ImportContext'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SingleImport from './SingleImport'
import ImportInfo from './ImportInfo'
import EndLine from '../../EndLine'


const Import = (props) => {
  const [data,setData] = useState({})
  const { importId } = useParams()
  const context = useContext(ImportContext)

  useEffect(() => {
    context.import(importId,setData)
  },[])

  return(
    Object.keys(data).length > 0 && <div className="col-11 p-3 light-border">
      <ImportInfo {...data}/>
      <EndLine />
      {data.items.map((item,index) => <SingleImport key={index} {...item}/>)}
    </div>
  )
}
export default Import

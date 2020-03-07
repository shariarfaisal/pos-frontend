import React,{ Fragment } from 'react'
import { Link } from 'react-router-dom'
import ControllerItem from './ControllerItem'


const Controller = ({ items }) => {
return(
    <div id="controller">
      <div className="logo bg-info sticky-top">
        <h1>POINTOF</h1>
      </div>
      <div className="items">
        <ul className="nav flex-column">
          {
            items.map((item,index) => <ControllerItem key={index} {...item} /> )
          }
        </ul>
      </div>
    </div>
  )
}



export default Controller

import React,{ Fragment } from 'react'
import { Link } from 'react-router-dom'


const Li = ({ name, link, subItems }) => {

  return(
    <li className="nav-item">
      {subItems.length > 0 ?
        <Fragment>
          <div style={{cursor: 'pointer'}} data-toggle="collapse" data-target={`#${name}Collapse`} className="nav-link text-light d-flex"><span className="mr-auto">{name}</span> <i className="fa fa-sort-down"></i></div>
          {subItems && <ul className="nav flex-column ml-4 pt-0 collapse" id={`${name}Collapse`}>
            {Object.keys(subItems).length > 0 && subItems.map((item,index) => {
              return <li key={index} className="nav-item"><Link className="nav-link text-light" to={item.link}>{item.name}</Link></li>
            })}
          </ul>}
        </Fragment> :
        <Link to={link} className="nav-link text-light d-flex" to={link}><span className="mr-auto">{name}</span></Link>
      }
    </li>
  )
}


const BranchController = ({ items }) => {
return(
    <div id="controller">
      <div className="logo bg-info sticky-top">
        <h1>POINTOF</h1>
      </div>
      <div className="items">
        <ul className="nav flex-column">
          {items.map((item,i) => <Li key={i} {...item} />)}
        </ul>
      </div>
    </div>
  )
}



export default BranchController

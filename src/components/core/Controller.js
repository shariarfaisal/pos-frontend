import React from 'react'

const items = [
  {id:1,name: 'Home'},
  {id:2,name: 'Category',subItems:[
    {id:1,name:'Create'},
    {id:2,name:'Categories'},
  ]},
  {id:3,name: 'Product',subItems:[
    {id:1,name:'Create'},
    {id:2,name:'Employees'},
  ]},
  {id:4,name: 'Branch',subItems:[
    {id:1,name:'Create'},
    {id:2,name:'Employees'},
  ]},
  {id:5,name: 'Export',subItems:[
    {id:1,name:'Create'},
    {id:2,name:'Employees'},
  ]},
  {id:6,name: 'Import',subItems:[
    {id:1,name:'Create'},
    {id:2,name:'Employees'},
  ]},
]

const Controller = (props) => {
return(
    <div id="controller">
      <div className="logo bg-info sticky-top">
        <h1>POINTOF</h1>
      </div>
      <div className="items">
        <ul className="nav flex-column">

          {
            items.map(i => {
              return <Item key={i} {...i} />
            })
          }

        </ul>
      </div>
    </div>
  )
}

const Item = ({ name, subItems }) => (
  <li className="nav-item">
    <a data-toggle="collapse" data-target={`#${name}Collapse`} className="nav-link text-light d-flex" href="/"><span className="mr-auto">{name}</span> {subItems && <i className="fa fa-sort-down"></i> }</a>
    {subItems && <ul className="nav flex-column ml-4 pt-0 collapse" id={`${name}Collapse`}>
      {Object.keys(subItems).length > 0 && subItems.map(i => {
        return <li className="nav-item"><a className="nav-link text-light" href="#">{i.name}</a></li>
      })}
    </ul>}
  </li>
)


export default Controller

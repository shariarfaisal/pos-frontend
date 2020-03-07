import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './ownar/Login'
import BranchLogin from './branch/BranchLogin'
import EmployeeRoutes from './ownar/routes'
import BranchRoutes from './branch/routes'

import tokenHandler from './utils/tokenHandler'

const employeeToken = localStorage.getItem('employee-token')
const branchToken = localStorage.getItem('branch-token')

let pages = [
  {path: '/',component: Login},
  {path: '/branch',component: BranchLogin},
]

if(employeeToken){
  tokenHandler({type:'setHeader',header:'employee-token',token: employeeToken})
  pages = EmployeeRoutes
}else if(branchToken){
  tokenHandler({type:'setHeader',header: 'branch-token',token: branchToken})
  pages = BranchRoutes
}

const App = () => {
  return (
    <Router>
      <Switch>
        {pages.map((i,index) => {
          return (
            <Route exact key={index} path={i.path} component={i.component} />
          )
        })}
      </Switch>
    </Router>
  )
}

export default App

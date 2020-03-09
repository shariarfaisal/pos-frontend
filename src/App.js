import React,{ useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './ownar/Login'
import BranchLogin from './branch/BranchLogin'
import EmployeeRoutes from './ownar/routes'
import BranchRoutes from './branch/routes'
import ProfileContextProvider from './store/ProfileContext'
import BranchProfileContextProvider from './store/branch/ProfileContext'
import tokenHandler from './utils/tokenHandler'
import { getProfile, checkAccess } from './utils/actions'
import Home from './branch/Home'

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
  const [access,setAccess] = useState({})

  useEffect(() => {
    if(employeeToken){
      getProfile(setAccess)
    }
  },[])

  return (
    employeeToken ?
    <Ownar
      access={access}
      checkAccess={checkAccess}
      pages={pages}
    />:
    <Branch
      pages={pages}
    />
  )
}

const Branch = ({ pages }) => {
  return (
    <Router>
      <Switch>
        {pages.map((i,index) => <Route
          exact
          key={index}
          path={i.path}
          component={i.component}
        />)}
      </Switch>
    </Router>
  )
}


const Ownar = ({ access, checkAccess, pages }) => (
  <ProfileContextProvider>
    <Router>
      <Switch>
        {Object.keys(access).length > 0 && checkAccess(access,pages).map((i,index) => {
          return (
            <Route
              exact
              key={index}
              path={i.path}
              component={i.component}
            />
          )
        })}
      </Switch>
    </Router>
  </ProfileContextProvider>
)

export default App

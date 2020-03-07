import React,{ useState } from 'react'
import axios from 'axios'
import tokenHandler from '../utils/tokenHandler'

const BranchLogin = (props) => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState(null)


  const submitHandler = async e => {
    e.preventDefault()
    if(username && password){
      try{
        const loged = await axios.post('http://localhost:1000/api/branch/login',{ username, password })
        if(loged){
          tokenHandler({type:'login',header:'branch-token',token: loged.data})
          window.location = 'http://localhost:3000/'
        }
      }catch(err){
        setError(err.response.data)
      }
    }
  }

  return(
    <div id="login">
      <div className="row justify-content-center align-items-center">
        <form onSubmit={submitHandler} className="col-md-8 col-lg-6 light-border text-info">
          {error ? <div className="py-2 text-center">
            <p className="text-danger m-0 log-err-msg">Unable to login!</p>
          </div>: <h2 className="text-center">Login</h2>}

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              onChange={e => setUsername(e.target.value)}
              id="username"
              type="text"
              className="form-control"
              value={username}
              placeholder="Username or Email"
              required={true}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={e => setPassword(e.target.value)}
              id="password"
              type="password"
              className="form-control"
              value={password}
              placeholder="Password"
              required={true}
            />
          </div>
          <button type="submit" className="btn btn-sm btn-info px-4">Login</button>
        </form>
      </div>
    </div>
    )
}
export default BranchLogin

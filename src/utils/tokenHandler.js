import axios from 'axios'

const tokenHandler = async (arg) => {
  if(arg.type === 'login'){
    localStorage.setItem(arg.header,arg.token)
  }

  if(arg.type === 'setHeader'){
    axios.defaults.headers.common[arg.header] = arg.token
    console.log('token setd');
  }
}

export default tokenHandler

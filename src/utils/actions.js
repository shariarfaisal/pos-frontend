import axios from 'axios'

export const getProfile = async (set) => {
  const res = await axios.get('http://localhost:1000/api/employee/me')
  if(res && res.data.type){
    set(res.data.type.access)
  }
}


export const checkAccess = (access,routes) => {
  return routes.filter(i => {
      const x = access[i.name[0].toLowerCase()]
      return x ? (x.includes(i.name[1]) ? true : false) : true
    })
}

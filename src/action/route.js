import React,{ createContext, useState, useEffect } from 'react'
import axios from 'axios'
const URL = 'http://localhost:1000/api'

const route = async ({ endpoint, data, req }) => {
  let error = null
  let res = null
  let info = null
  try{
    let getData;
    if(req === 'get'){
      getData = await axios.get(`${URL}${endpoint}`,data)
    }else if(req === 'post'){
      getData = await axios.post(`${URL}${endpoint}`,data)
    }else if(req === 'put'){
      getData = await axios.put(`${URL}${endpoint}`,data)
    }else if(req === 'delete'){
      getData = await axios.delete(`${URL}${endpoint}`,data)
    }


    if(getData){
      error = null
      res = getData.data
      info = getData
    }
  }catch(err){
    res = null
    error = err.response
    info = err.response
  }
  return { error, data: res, info }
}


export default route

import React,{ createContext, useState, useEffect } from 'react'
import axios from 'axios'

class Custom{
  constructor(endpoint){
    this.link = `http://localhost:1000/api/${endpoint}`
  }

// Get All Items
  getItems = async (set) => {
    const data = await axios.get(this.link)
    if(data){
      set(data.data)
    }
  }

// Get One Item
  getItem = async (id) => {
    let [success,error, data ] = ['','']
    try{
      data = await axios.get(`${this.link}/${id}`)
      if(data){
        success = 'ok!'
      }
    }catch(err){
      error = err.response.data
    }
    return { success, error, data: data }
  }

// Get Post Item
  getPost = async (data) => {
    let [success,error,result] = ['','','']
    try{
      result = await axios.post(this.link,data)
      if(result){
        error = ''
        success = `Created new item!`
      }
    }catch(err){
      success = ''
      error = err.response.data
    }
    return { success, error, data: result}
  }

// Get Update Item by id
  getUpdate = async (id,data) => {
    let [success,error, updated] = ['','','']
    try{
      updated = await axios.put(`${this.link}/${id}`,data)
      if(updated){
        error = ''
        success = 'Data Updated!'
      }
    }catch(err){
      success = ''
      error = err.response.data
    }
    return { success, error, data: updated }
  }


// Get Delete By Id 
  getDelete = async (id) => {
    let [success,error, deleted ] = ['','']
    try{
      deleted = await axios.delete(`${this.link}/${id}`)
      if(deleted){
        error = ''
        success = 'Successfully deleted!'
      }
    }catch(err){
      error = err.response.data
    }
    return { success, error, data: deleted}
  }


}


export default Custom

import React from 'react'
import Controller from '../components/core/Controller'
import Content from '../components/core/Content'

const Core = ({ children }) => {
return(
  <div class="app-row d-flex">
    <Controller />
    <Content>
      {children}
    </Content>
  </div>
  )
}
export default Core

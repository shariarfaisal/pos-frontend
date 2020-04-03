
const statusControl = (status) => {
  if(status === 'create') return 'primary'
  else if(status === 'pending') return 'warning'
  else if(status === 'process') return 'info'
  else if(status === 'complete') return 'success'
}

export default statusControl


const strConvert = (str,length) => {
  if((str.length + 3) > length){
    return str.substr(0,length)+'...'
  }else{
    return str
  }
}

export default strConvert


// inport axios from 'axios'
export default({method,url}) =>{
    return axios({
         method,
         url
    }).then(result=>{
        return result
    }).catch(error=>{
        return error
    })

}
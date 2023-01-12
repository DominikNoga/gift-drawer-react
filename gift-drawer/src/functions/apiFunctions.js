const read = async (url, token) =>{
    const data = await fetch(url,{
       headers:{
         "Authorization": `Bearer ${token}`
       }
        
    })
    const dataJson = await data.json()
    return dataJson;
}
const post = async (url, object) =>{
    return fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
}
const update = async (url, object, token) =>{
    fetch(url, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`

        },
        body: JSON.stringify(object)
    })
}
const deleteReq = async (url, token) =>{
    fetch(url,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        }
    })
}
const ApiFunctions = {
    post:post,
    read:read,
    update:update,
    delete:deleteReq
}

export default ApiFunctions;
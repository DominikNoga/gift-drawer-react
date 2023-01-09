const read = async (url) =>{
    const data = await fetch(url)
    const dataJson = await data.json()
    return dataJson;
}
const post = async (url, object) =>{
    fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
}
const update = async (url, object) =>{
    fetch(url, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
}
const deleteReq = async (url) =>{
    fetch(url,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
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
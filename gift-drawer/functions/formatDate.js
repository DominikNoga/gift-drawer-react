const formatDate = (date=new Date()) =>{
    const month = (date.getMonth()+ 1).toString() ; 
    return `${date.getFullYear()}-${month.padStart(2,0)}-${date.getDate().toString().padStart(2,0)}T${date.getHours()}:${date.getMinutes()}`
}
export default formatDate;
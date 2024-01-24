import axios from "axios"

const clientApi=axios.create({
    baseURL:'http://localhost:8000/client'
})
export const getAllClients =()=>{
    return clientApi.get('/')
}

export const getClient=(id)=>{
    return clientApi.get(`/${id}`)
}
export const deleteClient=(id)=>{
    return clientApi.delete(`/${id}/`)
}
export const postClients=(client)=>{
    return axios.post('http://localhost:8000/client/',client)
}
export const updateclient=(id,client)=>{
    return clientApi.put(`/${id}/`, client)
}
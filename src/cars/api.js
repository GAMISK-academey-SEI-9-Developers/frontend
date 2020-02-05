import axios from 'axios'
import apiUrl from '../apiConfig'

// axios.defaults.headers['Authorization'] 
export const index = (user) => {
    return axios({
        url: apiUrl + "/cars",
        method: "get",
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}
export const show = (user,id) => {
    return axios({
        url: apiUrl + "/cars/" + id,
        method: "get",
        headers:{
        "Authorization":`Bearer ${user.token}`
    }
    })
}
export const create = (car,user) => {
    return axios({
        url: apiUrl + "/cars/",
        method: "post",
        data: {
            car: car
        },
        headers:{
            "Authorization":`Bearer ${user.token}`
        }

    })
}
export const update = (user , car, id) => {
    return axios({
        url: apiUrl + "/cars/" + id,
        method: "patch",
        data: {
            car: car
        },
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}

export const destroy = (user,id) => {
    return axios({
        url: apiUrl + "/cars/" + id,
        method: "delete",
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}
import axios from 'axios'
import apiUrl from '../../apiConfig'

// axios.defaults.headers['Authorization'] 
export const index = (user) => {
    return axios({
        url: apiUrl + "/trips",
        method: "get",
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}
export const show = (user,tripId) => {
    return axios({
        url: apiUrl + "/trips/" + tripId,
        method: "get",
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{user}
        
    })
}
export const create = (trip,user) => {
    return axios({
        url: apiUrl + "/trips/",
        method: "post",
        data: {
           trip
        },
        headers:{
            "Authorization":`Bearer ${user.token}`
        }

    })
}
export const update = (trip, id,user) => {
    return axios({
        url: apiUrl + "/trips/" + id,
        method: "patch",
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data: {
           trip
        }
    })
}

export const addPassengers = (user,tripId,pass) => {
    return axios({
        url: apiUrl + "/trips/" +tripId+'/passengers',
        method: "put",
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            id:pass
        }
    })
}

export const deletePassenger = (user,tripId,pass) => {
    return axios({
        url: apiUrl + "/trips/" + tripId+'/passengers',
        method: "delete",
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            id:pass
        }
    })
}
export const destroy = (user,tripId) => {
    return axios({
        url: apiUrl + "/trips/" + tripId,
        method: "delete",
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
        
    })
}
export const destroyWaitingPassenger = (user,tripId,pass) => {
    return axios({
        url: apiUrl + "/trips/" + tripId+"/WaitingPassengers",
        method: "put",
        headers:{
            "Authorization":`Bearer ${user.token}`
        },data: {
            id:pass
         }
    })
}




export const addWaitingPassenger = (user,tripId) => {
    return axios({
        url: apiUrl + '/trips/'+ tripId+"/WaitingPassengers",
        method: "put",
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{user}
    })
}





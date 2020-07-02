import * as axios from "axios";


let instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"538a19b8-b072-4138-840a-88d1384280f9"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    followAPI(userID){
        return instance.post(`follow/${userID}`, {})
    },
    unfollowAPI(userID){
        return instance.delete(`follow/${userID}`, {})
    }
}

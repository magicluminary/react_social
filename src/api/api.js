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
export const profileAPI = {
    getProfile(userId){
        return instance.get('profile/'+userId);
    },
    getStatus(userId){
        console.log('profile/status/'+userId)
        return instance.get('profile/status/'+userId);
    },
    updateStatus(status){
        return instance.put('profile/status',{status: status});
    }
}
export const authAPI = {
    me(){
        return instance.get(`auth/me`);
    },
    login(email,password,rememberMe=false){
        return instance.post(`auth/login`,{email,password,rememberMe});
    },
    logout(){
        return instance.delete(`auth/login`);
    }
}



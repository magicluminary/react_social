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
    followAPI(userId){
        return instance.post(`follow/${userId}`, {})
    },
    unfollowAPI(userId){
        return instance.delete(`follow/${userId}`, {})
    }
}
export const profileAPI = {
    getProfile(userId){
        return instance.get('profile/'+userId);
    },
    getStatus(userId){
        return instance.get('profile/status/'+userId);
    },
    updateStatus(status){
        return instance.put('profile/status',{status: status});
    },
    savePhoto(photo){
        var formData = new FormData();
        formData.append("image", photo);
        return instance.put('profile/photo',formData,{
            headers: {
                'Content-type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile){
        return instance.put('profile',profile);
    }
}
export const authAPI = {
    me(){
        return instance.get(`auth/me`);
    },
    login(email,password,rememberMe=false, captcha=null){
        return instance.post(`auth/login`,{email,password,rememberMe,captcha});
    },
    logout(){
        return instance.delete(`auth/login`);
    }
}
export const securityAPI = {
    getCaptcha(){
        return instance.get(`security/get-captcha-url`);
    }
}



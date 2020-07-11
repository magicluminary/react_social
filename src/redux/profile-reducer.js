import {authAPI, profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO = 'SAVE_PHOTO';
const SAVE_PROFILE = 'SAVE_PROFILE';
const IS_SAVED = 'IS_SAVED';

let initialState = {
    posts: [
        {id: 1, name: 'What\'s up', likesCount: 20},
        {id: 2, name: 'It\'s my first post', likesCount: 28},
        {id: 3, name: 'Hello', likesCount: 9},
        {id: 4, name: 'Its me', likesCount: 786}
    ],
    profile: null,
    status: '',
    isSaved: true
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {id: 6, name: action.newPostText, likesCount: 0};
            return {...state, posts: [...state.posts, newPost]};
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)};
        }
        case SAVE_PHOTO: {
            return {...state, profile: {...state.profile, photos: action.photos}};
        }
        case IS_SAVED: {
            return {...state, isSaved: action.isSaved};
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const deletePostActionCreator = (postId) => ({type: DELETE_POST, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos})
export const profileWithoutError = (isSaved) => ({type: IS_SAVED, isSaved})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0)
        dispatch(getStatus(userId));
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.resultCode === 0)
        dispatch(savePhotoSuccess(response.data.photos));
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0){
        // dispatch(profileWithoutError(true))
        dispatch(getUserProfile(userId));
    } else {
        // dispatch(profileWithoutError(false))
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;
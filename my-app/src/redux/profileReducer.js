import {usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postData: [
        {message: "It is my first post", likeCount: "2", id: 2},
        {message: "Hi, haw are you?", likeCount: "11", id: 1}
    ],
    newPostText: 'new Post))',
    profile: null
}


const profileReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_POST:{
            let countPosts = state.postData.length;
            let inputText = state.newPostText;
            let newItem = {message: inputText, likeCount: "0", id: (countPosts+1)};
            return{
                ...state,
                postData: [newItem, ...state.postData],
                newPostText: ''
            }
        }
        case UPDATE_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export default profileReducer;

export const addPostActionCreator = ()=>({type: ADD_POST})
export const updatePostTextActionCreator = (text)=>({type: UPDATE_POST_TEXT, newText: text})
export const setUserProfile = (profile)=>({type: SET_USER_PROFILE, profile: profile})

export const getProfileById = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

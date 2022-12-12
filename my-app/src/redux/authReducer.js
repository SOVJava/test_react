import {usersAPI} from "../api/api";

const SET_PROFILE = 'SET_PROFILE';

let initialState = {
    id: null,
    fullName: null,
    status: '',
    contacts: [],
    isAuth: false
}


const authReducer = (state = initialState, action) => {

    switch (action.type){
        case SET_PROFILE:{
            return{
                ...state,
                ...action.data,
                contacts: action.data.contacts,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export default authReducer;

export const setProfileAC = (id, fullName, status, contacts)=>({type: SET_PROFILE, data: {id, fullName, status, contacts}})

export const authProfile = () => {
    return (dispatch) => {
        usersAPI.myProfile()
            .then(response => {
                let {id, fullName, status, contacts} = response.data;
                dispatch(setProfileAC(id, fullName, status, contacts))
            })
    }
}
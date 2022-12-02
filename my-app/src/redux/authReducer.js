const SET_PROFILE = 'SET_PROFILE';

let initialState = {
    id: null,
    fullName: '',
    status: '',
    contacts: []
}


const authReducer = (state = initialState, action) => {

    switch (action.type){
        case SET_PROFILE:{
            return{
                ...state,
                ...action.data,
                contacts: action.data.contacts
            }
        }
        default:
            return state;
    }
}

export default authReducer;

export const setProfileAC = (id, fullName, status, contacts)=>({type: SET_PROFILE, data: {id, fullName, status, contacts}})
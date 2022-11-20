const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
     usersData: [
        // {id: 1, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0B_7lio-_GgvUd7UQG_65AzLuQIrHnPZjTwQUzNI-kdWrMe4Ezuq1j5xKjM7j0X7Z1E&usqp=CAU',
        //     followed: true, fullName: 'Petrovna', status: 'Pupsik', location: {city: 'Moscow'}},
        // {id: 2, avatar: 'https://www.meme-arsenal.com/memes/83ec4738457d3a469b297fd3c679096f.jpg',
        //     followed: false, fullName: 'Sanek', status: 'I am king', location: {city: 'Ekb'}}
     ]
};

const usersReducer = (state = initialState, action) => {
   // window.state = state.usersData;

    switch (action.type){
        case FOLLOW:{
            return{
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id===action.id) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        }
        case UNFOLLOW:{
            return{
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id===action.id) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        }
        case SET_USERS:{
            return{
                ...state,
                usersData: [...state.usersData, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const followActionCreator = (userId)=>({type: FOLLOW, id: userId})
export const unfollowActionCreator = (userId)=>({type: UNFOLLOW, id: userId})
export const setUsersActionCreator = (usersData)=>({type: SET_USERS, users: usersData})

export default usersReducer;
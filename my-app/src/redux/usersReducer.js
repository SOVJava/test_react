const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_COUNT_USERS = 'SET_COUNT_USERS';

let initialState = {
    usersData: [
        // {id: 1, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0B_7lio-_GgvUd7UQG_65AzLuQIrHnPZjTwQUzNI-kdWrMe4Ezuq1j5xKjM7j0X7Z1E&usqp=CAU',
        //     followed: true, fullName: 'Petrovna', status: 'Pupsik', location: {city: 'Moscow'}},
        // {id: 2, avatar: 'https://www.meme-arsenal.com/memes/83ec4738457d3a469b297fd3c679096f.jpg',
        //     followed: false, fullName: 'Sanek', status: 'I am king', location: {city: 'Ekb'}}
    ],
    pageSize: 3,
    countUsers: 0,
    currentPage: 1

};

const usersReducer = (state = initialState, action) => {
    // window.state = state.usersData;

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                usersData: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }case SET_COUNT_USERS: {
            return {
                ...state,
                countUsers: action.countUsers
            }
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, id: userId})
export const unfollow = (userId) => ({type: UNFOLLOW, id: userId})
export const setUsers = (usersData) => ({type: SET_USERS, users: usersData})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setCountUsers = (countUsers) => ({type: SET_COUNT_USERS, countUsers: countUsers})

export default usersReducer;
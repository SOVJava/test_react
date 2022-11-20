import {connect} from "react-redux";
import UsersClass from "./UsersClass";
import {followActionCreator, unfollowActionCreator, setUsersActionCreator} from "../../redux/usersReducer";


let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            let action = followActionCreator(userId)
            dispatch(action)
        },
        unfollow: (userId) => {
            let action = unfollowActionCreator(userId)
            dispatch(action)
        },
        setUsers: (usersData) => {
            let action = setUsersActionCreator(usersData)
            dispatch(action)
        }
    }
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)
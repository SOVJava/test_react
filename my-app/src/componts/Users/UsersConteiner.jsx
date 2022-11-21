import {connect} from "react-redux";
import UsersClass from "./UsersClass";
import {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator,
    setCurrentPageActionCreator, setCountUsersActionCreator
} from "../../redux/usersReducer";


let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        countUsers: state.usersPage.countUsers,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPage) => {
            let action = setCurrentPageActionCreator(currentPage)
            dispatch(action)
        },
        setCountUsers: (countUsers) => {
            let action = setCountUsersActionCreator(countUsers)
            dispatch(action)
        }
    }
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)
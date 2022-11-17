import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, unfollowActionCreator} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData
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
        }
    }
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
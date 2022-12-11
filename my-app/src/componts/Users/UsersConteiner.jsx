import {connect} from "react-redux";
import UsersClass from "./UsersClass";
import {
    setCurrentPage,
    progressFollowing,
    getUsersThunkCreator, followUser, unfollowUser
} from "../../redux/usersReducer";


let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        countUsers: state.usersPage.countUsers,
        currentPage: state.usersPage.currentPage,
        followingButton: state.usersPage.followingButton
    }
}

let mapDispatchToProps =  {
    followUser,
    unfollowUser,
    setCurrentPage,
    progressFollowing,
    getUsers: getUsersThunkCreator
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)
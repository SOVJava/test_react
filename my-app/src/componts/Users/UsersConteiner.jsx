import {connect} from "react-redux";
import UsersClass from "./UsersClass";
import {follow, unfollow, setUsers, setCurrentPage, setCountUsers, progressFollowing} from "../../redux/usersReducer";


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
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setCountUsers,
    progressFollowing
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)
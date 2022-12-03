import React from "react";
import image from '../../icons/user.png'
import UserCleanComponent from "./UsersCleanComponent";
import {usersAPI} from "../../api/api";

class UsersClass extends React.Component {

    componentDidMount() {
        this.showUsers();
    }

    showUsers = () => {
        if (this.props.usersData.length === 0) {
            usersAPI.getUsersPage(this.props.currentPage, this.props.pageSize)
                .then(response => {
                    this.props.setUsers(response.followers)
                    this.props.setCountUsers(response.count)
                })
        }
    }

    onChangePage = (page) =>{
        this.props.setCurrentPage(page)
        usersAPI.getNewUsersPage(page, this.props.pageSize)
            .then(response => {
                this.props.setUsers(response.followers)
            })
    }

    render() {
        return <UserCleanComponent
            countUsers={this.props.countUsers}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onChangePage={this.onChangePage}
            usersData={this.props.usersData}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            image={image}
            followingButton={this.props.followingButton}
            progressFollowing={this.props.progressFollowing}
        />
    }
}

export default UsersClass;
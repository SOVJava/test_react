import React from "react";
import image from '../../icons/user.png'
import UserCleanComponent from "./UsersCleanComponent";

class UsersClass extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onChangePage = (page) => {
        this.props.setCurrentPage(page)
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        return <UserCleanComponent
            countUsers={this.props.countUsers}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onChangePage={this.onChangePage}
            usersData={this.props.usersData}
            unfollowUser={this.props.unfollowUser}
            followUser={this.props.followUser}
            image={image}
            followingButton={this.props.followingButton}
            progressFollowing={this.props.progressFollowing}
        />
    }
}

export default UsersClass;
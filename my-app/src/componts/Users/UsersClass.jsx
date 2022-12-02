import React from "react";
import axios from "axios";
import {localStorage} from "../../redux/redux-store";
import image from '../../icons/user.png'
import UserCleanComponent from "./UsersCleanComponent";

class UsersClass extends React.Component {

    componentDidMount() {
        this.showUsers();
    }

    showUsers = () => {
        if (this.props.usersData.length === 0) {
            axios.get(`http://127.0.0.1:8087/users/page?page=${this.props.currentPage}&count=${this.props.pageSize}`, localStorage)
                .then(response => {
                    this.props.setUsers(response.data.followers)
                    this.props.setCountUsers(response.data.count)
                })
                .catch(error => console.log(error));
        }
    }

    onChangePage = (page) =>{
        this.props.setCurrentPage(page)
        axios.get(`http://127.0.0.1:8087/users/page?page=${page}&count=${this.props.pageSize}`, localStorage)
            .then(response => {
                this.props.setUsers(response.data.followers)
            })
            .catch(error => console.log(error));
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
        />
    }
}

export default UsersClass;
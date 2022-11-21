import React from "react";
import css from './Users.module.css'
import axios from "axios";
import {localStorage} from "../../redux/redux-store";
import image from '../../icons/user.png'

class UsersClass extends React.Component {

    componentDidMount() {
        this.showUsers();
    }

    showUsers = () => {
        if (this.props.usersData.length === 0) {
            axios.get(`http://127.0.0.1:8087/service/users/page?page=${this.props.currentPage}&count=${this.props.pageSize}`, localStorage)
                .then(response => {
                    this.props.setUsers(response.data.followers)
                    this.props.setCountUsers(response.data.count)
                })
                .catch(error => console.log(error));
        }
    }

    onChangePage = (page) =>{
        this.props.setCurrentPage(page)
        axios.get(`http://127.0.0.1:8087/service/users/page?page=${page}&count=${this.props.pageSize}`, localStorage)
            .then(response => {
                this.props.setUsers(response.data.followers)
            })
            .catch(error => console.log(error));
    }

    render() {

        let countPage = Math.ceil(this.props.countUsers / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= countPage; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={css.page}>
                    {pages.map(p => {
                        return <span key={`page_${p}`}
                                     className={this.props.currentPage === p ? css.selectedPage : ''}
                                     onClick={()=>{this.onChangePage(p)}}>{` ${p} `}</span>
                         })
                    }
                </div>
                {this.props.usersData.map(u =>
                    <div className={css.elements} key={'userClass_item_' + u.id}>
                        <div>
                            <div><img className={css.avatar}
                                      src={typeof u.photo === 'undefined' || u.photo === null ? image : u.photo}/></div>
                            <div className={css.button}>
                                {u.followed ?
                                    <button onClick={() => this.props.unfollow(u.id)}>follow</button> :
                                    <button onClick={() => this.props.follow(u.id)}>unfollow</button>}
                            </div>
                        </div>

                        <div>
                            <div className={css.desc}>
                                <div> Nick: {u.fullName === null ? '---' : u.fullName}</div>
                                <br/>
                                <div> Status: {u.status === null ? '---' : u.status}</div>
                                <div> City: ---</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}

export default UsersClass;
import React from "react";
import css from './Users.module.css'
import axios from "axios";
import {localStorage} from "../../redux/redux-store";

let has = true;
const Users = (props) => {


    if (props.usersData.length === 0 && has) {
        has = false;
        axios.get('http://127.0.0.1:8087/service/users/get', localStorage)
            .then(response => {
                // console.log(response.data)
                props.setUsers(response.data)
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            {
                props.usersData.map(u =>
                    <div className={css.elements}>
                        <div>
                            <div><img className={css.avatar} src=''/></div>
                            <div className={css.button}>
                                {u.followed ?
                                    <button onClick={() => props.unfollow(u.id)}>follow</button> :
                                    <button onClick={() => props.follow(u.id)}>unfollow</button>}
                            </div>
                        </div>

                        <div>
                            <div className={css.desc}>
                                <div> Nick: {u.fullName}</div>
                                <br/>
                                <div>Status: {u.status}</div>
                                <div> City: -</div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
}

export default Users;
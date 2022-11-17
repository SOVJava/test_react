import React from "react";
import css from './Users.module.css'

const Users = (props) => {
    return(
        <div>
            {
                props.users.map(u=>
                    <div className={css.elements}>
                        <div>
                            <div><img className={css.avatar} src={u.avatar}/></div>
                            <div className={css.button}>
                                {u.followed ?
                                    <button onClick={() => props.unfollow(u.id)}>follow</button> :
                                    <button onClick={() => props.follow(u.id)}>unfollow</button>}
                            </div>
                        </div>

                        <div>
                            <div className={css.desc}>
                                <div>  Nick: {u.fullName}</div>
                                <br/>
                                <div>Status: {u.status}</div>
                                <div>  City: {u.location.city}</div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
}

export default Users;
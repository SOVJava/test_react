import React from "react";
import css from "./Users.module.css";
import {NavLink} from "react-router-dom";

let UserCleanComponent = (props) => {

    let countPage = Math.ceil(props.countUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= countPage; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={css.page}>
                {pages.map(p => {
                    return <span key={`page_${p}`}
                                 className={props.currentPage === p ? css.selectedPage : ''}
                                 onClick={() => {
                                     props.onChangePage(p)
                                 }}>{` ${p} `}</span>
                })
                }
            </div>
            {props.usersData.map(u =>
                <div className={css.elements} key={'userClass_item_' + u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <div><img className={css.avatar}
                                      src={typeof u.photo === 'undefined' || u.photo === null ? props.image : u.photo}/>
                            </div>
                        </NavLink>
                        <div className={css.button}>
                            {u.followed
                                ? <button disabled={props.followingButton.some(id => id===u.id)} onClick={() => {
                                    props.unfollowUser(u.id)
                                }}>follow</button>
                                : <button disabled={props.followingButton.some(id => id===u.id)} onClick={() => {
                                    props.followUser(u.id)
                                }}>unfollow</button>}
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
};

export default UserCleanComponent;
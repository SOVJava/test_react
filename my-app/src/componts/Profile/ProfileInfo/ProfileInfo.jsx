import React from 'react';
import css from './ProfileInfo.module.css'
import {NavLink} from "react-router-dom";
import {findAllByDisplayValue} from "@testing-library/react";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div>Ждите</div>
    }

    return (
        <div className={css.profileInfo}>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWf0zKoTxn8YNID34rijRj7z7q2p_RPOKCMA&usqp=CAU'
                    alt='fon'/>
            </div>
            <div className={css.info}>
                ava + description
                <div>THIS IS PHOTO PROFILE</div>
                <div>{props.profile.fullName}</div>
                <div>{!props.profile.status ? '' : props.profile.status}</div>
                {props.profile.contacts.map((el, i) => (<div key={i}>{`-${Object.keys(el)[0]} : ${Object.keys(el)[0]}`}</div>))}

            </div>
        </div>
    );
}

export default ProfileInfo;
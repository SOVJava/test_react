import React from 'react';
import css from './ProfileInfo.module.css'




const ProfileInfo = () => {
    return (
        <div className={css.profileInfo}>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWf0zKoTxn8YNID34rijRj7z7q2p_RPOKCMA&usqp=CAU'
                     alt='avatar'/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;
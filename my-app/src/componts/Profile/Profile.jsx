import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {SuperMyPostsContainer} from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <SuperMyPostsContainer />
        </div>
    );
}

export default Profile;
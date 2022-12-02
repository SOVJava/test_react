import React from 'react';
import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer, {SuperMyPostsContainer} from "./MyPosts/MyPostsContainer";
import ProfileContainer from "./ProfileConteiner";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <SuperMyPostsContainer />
        </div>
    );
}

export default Profile;
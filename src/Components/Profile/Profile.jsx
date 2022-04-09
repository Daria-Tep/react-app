import React from 'react';

import Banner from './Banner/Banner';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

    return (
        <div className={styles.profile}>
            <Banner />
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    ) 
}

export default Profile;
import React from 'react';

import Banner from './Banner/Banner';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
   
    return (
        <div className={styles.profile}>
            <Banner />
            <ProfileInfo />
            <MyPosts postsData={props.state.postsData} addPost={props.addPost} />
        </div>
    ) 
}

export default Profile;
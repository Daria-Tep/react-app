import React from 'react';
import styles from './ProfileInfo.module.css';
import Avatar from './Avatar/Avatar';
import Description from './Description/Description';


const ProfileInfo = () => {
    return (
     <div className={styles.avatarDescription}>
        <Avatar />
        <Description />
     </div>
    )
}

export default ProfileInfo;
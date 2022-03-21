import React from 'react';
import styles from './UserName.module.css';

const UserName = (props) => {
    return (
        <div className={styles.userName}>
           {props.name}
        </div>
    )
}

export default UserName;
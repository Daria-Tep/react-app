import React from 'react';
import styles from './UserBirth.module.css';

const UserBirth = (props) => {
    return (
        <div className={styles.item}>
            <span>Date of Birth: </span>
            <span className={styles.dateOfBirth}>
                {props.dayOfBirth} {props.monthOfBirth}
            </span>
        </div>
    )
}

export default UserBirth;
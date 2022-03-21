import React from 'react';
import styles from './UserEducation.module.css';

const UserEducation = (props) => {
    return (
        <div className={styles.item}>
            <span>Education: </span>
            <span className={styles.userEducation}>
                {props.education}
            </span>
        </div>
    )
}

export default UserEducation;
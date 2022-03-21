import React from 'react';
import styles from './UserCity.module.css';

const UserCity = (props) => {
    return (
        <div className={styles.item}>
            <span>City: </span>
            <span className={styles.userCity}>
                {props.city}
            </span>
        </div>
    )
}

export default UserCity;
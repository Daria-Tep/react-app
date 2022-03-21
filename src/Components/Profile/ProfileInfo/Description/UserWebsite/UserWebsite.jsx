import React from 'react';
import styles from './UserWebsite.module.css';

const UserWebsite = (props) => {
    return (
        <div className={styles.item}>
          <span>Website: </span>
          <span className={styles.userWebsite}>
              {props.website}
          </span>
        </div>
    )
}

export default UserWebsite;
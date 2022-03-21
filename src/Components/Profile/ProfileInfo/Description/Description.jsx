import React from 'react';
import UserBirth from './UserBirth/UserBirth';
import styles from './Description.module.css';
import UserCity from './UserCity/UserCity';
import UserEducation from './UserEducation/UserEducation';
import UserName from './UserName/UserName';
import UserWebsite from './UserWebsite/UserWebsite';

const Description = () => {
    return (
        <div className={styles.description}>
            <UserName name='Daria T.' />
            <UserBirth dayOfBirth='21' monthOfBirth='december' />
            <UserCity city='Biysk' />
            <UserEducation education='BTI' />
            <UserWebsite website='https:/Daria-Tep.ru' />
        </div>
    )
}

export default Description;
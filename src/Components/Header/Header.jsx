import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png' alt='logo' />
            <h1>все свои</h1>
            </div>    
        </header>
    )
}

export default Header;
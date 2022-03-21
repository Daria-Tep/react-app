import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import styles from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={styles.nav}>
            <div className={styles.wrapper}>
              
                <ul className={styles.navList}>
                    <li><NavLink to="/profile" className = { navData => navData.isActive ? styles.active : styles.item }>Profile</NavLink></li>
                    <li><NavLink to="/dialogs" className={ navData => navData.isActive ? styles.active : styles.item }>Messages</NavLink></li>
                    <li><NavLink to="/music" className={ navData => navData.isActive ? styles.active : styles.item }>Music</NavLink></li>
                    <li><NavLink to="/news" className={ navData => navData.isActive ? styles.active : styles.item }>News</NavLink></li>
                    <li><NavLink to="/settings" className={navData => navData.isActive ? styles.active : styles.item}>Settings</NavLink></li>
                </ul>
            
             <Friends state={props.state} />
            </div>
        </nav>
    )
}

export default Navbar;
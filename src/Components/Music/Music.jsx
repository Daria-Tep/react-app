import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import AllMusic from './AllMusic/AllMusic';
import styles from './Music.module.css';


const Music = (props) => {

    return (
        <div className={styles.music}>
          <div className={styles.menu}>
             <NavLink to='/music/allMusic' className={ navData => navData.isActive ? styles.active : styles.itemMenu }>All music</NavLink>
             <NavLink to='/music/myMusic' className={ navData => navData.isActive ? styles.active : styles.itemMenu }>My music</NavLink>
          </div>

          <div className={styles.wrapper}>
            <Routes>
              <Route path='/allmusic' element={<AllMusic music={props.music} />}></Route>
            </Routes>
          </div>
         
        </div>
    )
}

export default Music;
import React from 'react';
import styles from './MusicItem.module.css';


const MusicItem = (props) => {
   
    let returnId = () => {
        props.callback( props.id )
    } 

    return (
        <div onClick={ returnId }  className={styles.wrapper}>
           {props.signer}
           {props.trackName}
        </div>
    )
}

export default MusicItem;
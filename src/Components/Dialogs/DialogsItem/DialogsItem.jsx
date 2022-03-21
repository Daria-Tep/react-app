import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialogsItem.module.css";

const DialogsItem = (props) => {
   
    let path = `/dialogs/${props.id}`;
    return (
        <div className={styles.dialog}>
          <div className={styles.avatar}>
            <img src={props.img} alt='avatar' />
          </div>
        
        <NavLink  to={path} className={ navData => navData.isActive ? styles.active : styles.item}>
            {props.name}
        </NavLink>
      </div>
    )
}

export default DialogsItem;

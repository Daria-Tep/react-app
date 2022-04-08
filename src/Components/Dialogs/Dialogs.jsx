import React from "react";
import { addMessageCreator, updateMessageTextCreator } from "../../Redux/dialogs-reducer.js";
import styles from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
  
  let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} img={dialog.img} />)
  
  let messagesElements = props.dialogsPage.messagesData.map(message => <Message message={message.message} direction={message.direction} />)


  let addMessage = () => {
    props.dispatch(addMessageCreator() );
    props.dispatch( updateMessageTextCreator('') );

  }

  let updateMessageText = (event) => {
    let text = event.target.value;
     props.dispatch(updateMessageTextCreator(text));
  }


  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={styles.wrapper}>
        <div className={styles.messages}>
        {messagesElements}
        </div>

       <div className={styles.newMessageWrapper}>
          <textarea onChange={ updateMessageText } value={props.dialogsPage.newMessage} />
          <button onClick={addMessage}>Send!</button>
       </div>
        
      </div>
      
    </div>
  );
};

export default Dialogs;

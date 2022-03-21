import React from "react";
import styles from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
  
  let dialogsElements = props.state.dialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} img={dialog.img} />)
  
  let messagesElements = props.state.messagesData.map(message => <Message message={message.message} direction={message.direction} />)

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text)
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
          <textarea ref={newMessageElement} ></textarea>
          <button onClick={addMessage}>Send!</button>
       </div>
        
      </div>
      
    </div>
  );
};

export default Dialogs;

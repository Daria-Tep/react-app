import React from "react";
import { addMessageCreator, updateMessageTextCreator } from "../../Redux/dialogs-reducer.js";
import Dialogs from "./Dialogs.jsx";



const DialogsContainer = (props) => {
 
  let state = props.store.getState().dialogsPage;
 
  let addMessage = () => {
    props.store.dispatch(addMessageCreator() );
    props.store.dispatch( updateMessageTextCreator('') );

  }

  let updateMessageText = (text) => {
     props.store.dispatch(updateMessageTextCreator(text));
  }


  return ( 
    <Dialogs addMessage={ addMessage } updateMessageText={ updateMessageText } state={ state } />
   );
};

export default DialogsContainer;

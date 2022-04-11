import React from "react";
import {
  addMessageCreator,
  updateMessageTextCreator,
} from "../../Redux/dialogs-reducer.js";
import StoreContext from "../../StoreContext.js";
import Dialogs from "./Dialogs.jsx";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let addMessage = () => {
          store.dispatch(addMessageCreator());
          store.dispatch(updateMessageTextCreator(""));
        };

        let updateMessageText = (text) => {
          store.dispatch(updateMessageTextCreator(text));
        };

       return <Dialogs
          addMessage={addMessage}
          updateMessageText={updateMessageText}
          state={state}
        />;
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;

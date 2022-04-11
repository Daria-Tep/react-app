import React from "react";
import StoreContext from "../../StoreContext";
import Music from "./Music";

const MusicContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().music;

        return <Music state={state} />;
      }}
    </StoreContext.Consumer>
  );
};

export default MusicContainer;

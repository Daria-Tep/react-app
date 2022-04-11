import React from "react";
import Friends from "./Friends";
import StoreContext from "./../../../StoreContext";

const FriendsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        return <Friends state={store.getState().sidebar.friends} />;
      }}
    </StoreContext.Consumer>
  );
};

export default FriendsContainer;

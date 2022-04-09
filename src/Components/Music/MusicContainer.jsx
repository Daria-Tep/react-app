import React from 'react';
import Music from './Music';



const MusicContainer = (props) => {

  let state = props.store.getState().music;
    
   return (
        <Music state={ state } />
    )
}

export default MusicContainer;
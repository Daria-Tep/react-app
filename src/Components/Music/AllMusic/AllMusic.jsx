import React from 'react';
import styles from './AllMusic.module.css';
import MusicItem from './MusicItem/MusicItem';


const AllMusic = (props) => {
  
  let state = props.music.allMusic;
  let currentId = 0;

  let  callback = (data) => {
    currentId = data;
    return currentId;
  }

  
  console.log(currentId)
  
  let musicItems = props.music.allMusic.map( item => <MusicItem callback={callback} src={item.src} id={item.id}  signer={item.signer} trackName={item.trackName} /> )

    return (
        <div>
         <audio src={ state[currentId].src } controls></audio>

         {musicItems}
        
        </div>
    )
}

export default AllMusic;
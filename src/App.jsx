import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {Routes, Route,} from 'react-router-dom';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import MusicContainer from './Components/Music/MusicContainer';


function App(props) {

  return (
    <div className='App'>
      <Header />
      <Navbar state={props.state.sidebar} />

      <div className='app-wrapper-content'>
       <Routes>
         <Route path='/profile' element={<Profile store={props.store} />}></Route>
         <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />}></Route> 
         <Route path='/music/*'   element={<MusicContainer store={props.store} />}></Route>
         <Route path='/news'    element={<News />}></Route>
         <Route path='/settings' element={<Settings />}></Route>
       </Routes> 
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {BrowserRouter,Routes, Route,} from 'react-router-dom';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';


function App(props) {

  return (
    <div className='App'>
      <Header />
      <Navbar state={props.state.sidebar} />

      <div className='app-wrapper-content'>
       <Routes>
         <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}></Route>
         <Route path='/dialogs/*' element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />}></Route> 
         <Route path='/music/*'   element={<Music music={props.state.music} />}></Route>
         <Route path='/news'    element={<News />}></Route>
         <Route path='/settings' element={<Settings />}></Route>
       </Routes> 
      </div>
    </div>
  );
}

export default App;

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
         <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost} />}></Route>
         <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}  />}></Route>
         <Route path='/music'   element={<Music />}></Route>
         <Route path='/news'    element={<News />}></Route>
         <Route path='/settings' element={<Settings />}></Route>
       </Routes> 
      </div>
    </div>
  );
}

export default App;

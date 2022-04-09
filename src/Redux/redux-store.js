import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import musicReducer from './music-reducer';

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   sidebar: sidebarReducer,
   music: musicReducer,
})

let store = createStore(reducers);



export default store;
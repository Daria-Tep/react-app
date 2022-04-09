const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
  postsData: [
    { id: 1, message: "hi! I love you", likesCount: 20 },
    { id: 2, message: "It's super", likesCount: 26 },
    { id: 3, message: "My first post!!", likesCount: 10 },
    { id: 4, message: "Yo", likesCount: 200 },
  ],
  newPostText: "createNewPost",
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
          let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
         };
         
          state.postsData.push(newPost);
        return state;

        case UPDATE_NEW_POST_TEXT:
          state.newPostText = action.text;
          return state;
        
        default: 
          return state;
    }
}





export const updateNewPostTextCreator = (text) =>  (
    {type: UPDATE_NEW_POST_TEXT, 
     text: text}
    );
  
export const addPostCreator = () => ({type: ADD_POST})
  

export default profileReducer;
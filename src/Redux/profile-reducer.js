const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state, action) => {

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
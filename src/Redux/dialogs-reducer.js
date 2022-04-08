const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


const dialogsReducer = (state, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
          let newMessage = {
            id: 4,
            message: state.newMessage,
            direction: 'right'
           }
          state.messagesData.push(newMessage);
        return state;

        case UPDATE_MESSAGE_TEXT:
          state.newMessage = action.text;
        return state;
        
        default:
          return state;
    }
}

export const addMessageCreator = () => ({ type: SEND_MESSAGE } )

export const updateMessageTextCreator = (text) => (
    { type: UPDATE_MESSAGE_TEXT, text: text }
);


export default dialogsReducer;
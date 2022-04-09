const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Daria",
      img: "https://bipbap.ru/wp-content/uploads/2021/07/1133ea1de4e69bd760056f2c04e90920.jpg",
    },
    {
      id: 2,
      name: "Natali",
      img: "https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg",
    },
    {
      id: 3,
      name: "Felix",
      img: "https://handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids4handcraftguide.com_.jpg?itok=I2Q9q-2e",
    },
    {
      id: 4,
      name: "Dimych",
      img: "https://www.ejin.ru/wp-content/uploads/2017/10/1496930505_125-1.jpg",
    },
    {
      id: 5,
      name: "Spirit",
      img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
    },
  ],
  messagesData: [
    { id: 1, message: "Hi, I'm message!", direction: "left" },
    { id: 2, message: "I love you", direction: "right" },
    { id: 3, message: "Yo", direction: "left" },
  ],

  newMessage: "Hi, I am Message!",
};

const dialogsReducer = (state = initialState, action) => {
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
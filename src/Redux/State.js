
let state = {
    profilePage: {
        postsData: [
            { id: 1, message: "hi! I love you", likesCount: 20 },
            { id: 2, message: "It's super", likesCount: 26 },
            { id: 3, message: "My first post!!", likesCount: 10 },
            { id: 4, message: "Yo", likesCount: 200 },
          ],
    },

    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Daria', img: 'https://bipbap.ru/wp-content/uploads/2021/07/1133ea1de4e69bd760056f2c04e90920.jpg',},
            {id: 2, name: 'Natali', img: 'https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg',},
            {id: 3, name: 'Felix', img: 'https://handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids4handcraftguide.com_.jpg?itok=I2Q9q-2e',},
            {id: 4, name: 'Dimych', img: 'https://www.ejin.ru/wp-content/uploads/2017/10/1496930505_125-1.jpg',},
            {id: 5, name: 'Spirit', img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',},
          ],
          messagesData: [
            {id: 1, message: 'Hi, I\'m message!', direction: 'left'},
            {id: 2, message: 'I love you', direction: 'right'},
            {id: 3, message: 'Yo', direction:'left'},
          ],
    },

    sidebar: {
      friends: [
        {id: 10, name: 'Natali', img: 'https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg'},
        {id: 20, name: 'Felix', img: 'https://handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids4handcraftguide.com_.jpg?itok=I2Q9q-2e'},
        {id: 30, name: 'Dimych', img: 'https://www.ejin.ru/wp-content/uploads/2017/10/1496930505_125-1.jpg'},
      ]
    },
        
}

export let addPost = (postMessage) => {

  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };

  state.profilePage.postsData.push(newPost);
}

export default state;
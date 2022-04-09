import src1 from '../Assets/Music/zhu-nightcrawler.mp3'
import src2 from '../Assets/Music/zhu-good-life.mp3'


let initialState = {
    allMusic: [
      {
        id: 0,
        signer: 'ZHU',
        trackName: 'Nightcrawler',
        src: src1,
      },

      {
        id: 1,
        signer: 'ZHU',
        trackName: 'Good life',
        src: src2,
      }
    ]
  };

const musicReducer = (state = initialState, action) => {
    return state
}

export default musicReducer;
import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Jungle Boogie", duration: "4:05" },
    { title: "Brick House", duration: "2:55" },
    { title: "Don't Stop 'til You Get Enough", duration: "3:24" },
    { title: "Let's Groove", duration: "3:02" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

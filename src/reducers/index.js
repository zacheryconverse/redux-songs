import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:25' },
    { title: 'All Star', duration: '3:03' },
    { title: 'I Want it That Way', duration: '1:42' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

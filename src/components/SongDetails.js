import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ song }) => {
  if (!song) return (
    <div>
      <h3>
        Select a Song
      </h3>
    </div>
  )
  
  return (
    <div>
      <h3>Details for:</h3>
        <p>
          {song.title}
          <br />
          {song.duration}
        </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetails);
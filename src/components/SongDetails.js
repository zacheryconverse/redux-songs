import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
  console.log('props', props)
  return <div>Song Details</div>
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetails);
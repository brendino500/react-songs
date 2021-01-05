import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    // this.props === { songs: state.songs }
    return <div>SongList</div>;
  }
}

// all data inside redux store
const mapStateToProps = (state) => {
  console.log(state);

  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);

import React, { Component } from 'react';
//import logo from './logo.svg';
import './TrackList.css';
import Track from '../Track/Track.js'

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks && this.props.tracks.map(track =>
          //<Track track={this.props.track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>
          <Track key={track.id}
                    track={track}
                    onAdd={this.props.onAdd}
                    isRemoval={this.props.isRemoval}
                    onRemove={this.props.onRemove}
                    />

      )}
      </div>
    );
  }
}

export default TrackList;

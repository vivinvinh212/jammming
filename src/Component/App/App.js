import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchResults: [],
      playlistName: "conchymmauhong",
      playlistTracks: []
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)

  }

  search(term) {
    console.log(term)
  }

  updatePlaylistName(newName) {
    this.setState({ playlistName: newName })
  }

  savePlaylist() {
    return (
      playlistTracks.map(track => track.uri)
    )
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks
    if (tracks.find(existTrack => existTrack.id == track.id)) {
      return;
    }
    tracks.push(track)
    this.setState({
      playlistTracks: tracks
    })
  }
  removeTrack(track) {
    let track = this.state.playlistTracks
    if (tracks.find(existTrack => existTrack.id == track.id)) {
      tracks.pop(track);
    }
    this.setState({
      playlistTracks: tracks
    })
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults tracks={this.state.SearchResults} onAdd={this.addTrack} onRemove={this.removeTrack} />
            <Playlist onSave={this.savePlaylist} name={this.state.playlistName} tracks={this.state.playlistTracks} onNameChange={this.updatePlaylistName} />
          </div>
        </div>
      </div >
    );

  }

}

export default App;

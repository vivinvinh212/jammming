import React from 'react'
import Track from '../Track/Track';
import './TrackList'

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map(track => (
                        <Track key={track.id} name={track.name} artist={track.artist} album={track.album}
                            onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />
                    ))
                }
            </div>
        )
    }
}
export default TrackList;
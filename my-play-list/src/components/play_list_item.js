import React from 'react';
import SongNameItem from './song_name_items.js';

class PlayListItem extends React.Component{
  constructor(props){
    super(props);

    this.state={
              song:[]
    };
  }


  deleteList(id){
    fetch('/playlist/'+id+'/', {
      method: 'DELETE',
      mode: 'cors'
    })
    window.location.reload();

  }

  render(){
    const song =this.props.playlist.songs;

    const songNames = song.map((song) => {
      return <SongNameItem mysong = {song} />
});
    return(
      <div>
        <div className="playListItem">
            <h3 className="itemId">PlayList ID: {this.props.playlist.id}</h3>
          <p>PlayList name: {this.props.playlist.name}</p><br></br>
          <div>PlayList Songs: {songNames}</div>
          <button type="button" className="btn btn-default btn-sm removeButton" onClick={()=>this.deleteList(this.props.playlist.id) }>
            <i className="fa fa-trash w3-text-red"></i> Remove
          </button>
        </div>
      </div>
    )

  }

}

export default PlayListItem;

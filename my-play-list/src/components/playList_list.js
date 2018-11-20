import React from 'react';
import PlayListHeader from './playlist_header.js';
import PlayListItem from './play_list_item.js';
import AddNewPlaylist from './add_new_playlist.js';
class PlayListLayout extends React.Component{

  render(){
    const playListItem = this.props.myPlayList.map((playlist) => {
      return <PlayListItem key = {playlist.id}
                           playlist = {playlist}
                            />
    });

    return(
      <div className="playListLayout">
        <PlayListHeader />
        {playListItem}
        <AddNewPlaylist />
      </div>
    )

  }

}

export default PlayListLayout;

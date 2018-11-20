import React from 'react';
import MusicListItem from './music_list_item.js';
import PlayListName from './play_list_name.js'

class AllMusicList extends React.Component{
  constructor(props){
    super(props);

    this.state={
                id: -1,
                playListId:-1,
    };
  }

  render(){

    const musicItem = this.props.musics.map((music) => {
      return (
              <div>
                <MusicListItem
                key = {music.id}
                music = {music}
                onMusicSelect = {(selectedMusic)=> this.setState({id:selectedMusic})} />
              </div>)
    });

    const playListNames = this.props.myPlayList.map((playlistname) => {
      return <PlayListName key = {playlistname.id}
                           id = {playlistname.id}
                           name={playlistname.name}
                           onPlayListSelect = {selectedPlayList => this.setState({playListId:selectedPlayList})}
                           finalMusicID={this.state.id}
                            />
    });

    console.log(this.state.playListId);

    console.log("selectID: " + this.state.id);

    return(
      <div>
            {musicItem}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4>Add your song into one PlayList.</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <div className="modal-body">
                       {playListNames}
                    </div>
                    <div className="modal-footer">
                        <button type="button" id="closebutton" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
          </div>
      </div>
    );
  }

};


export default AllMusicList;

import React from 'react';

class PlayListName extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      myMusicID:[],
    };

  }

  getOldList(id){
    fetch("/playlist/"+id+"/", {
      method:'GET',
      mode: 'cors',
      eaders: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            myMusicID:result.songs
          }
          );
        },
      );
  }

  addToPlayList(num){
    fetch('/playlist/'+num+'/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        "name": this.props.name,
        "songs": this.state.myMusicID
      })
    })
  }

  onclickPlayListSelect(num){
    this.props.onPlayListSelect(num);
    this.getOldList(num);
    setTimeout(()=> {
        console.log("my old musicID: " + this.state.myMusicID);
      if(!this.state.myMusicID.includes(this.props.finalMusicID)){
        this.setState({myMusicID: this.state.myMusicID.concat(this.props.finalMusicID)});
        this.addToPlayList(num);
        window.location.reload();
      }else{
        alert("This song was already inside playlist.");
      }
      document.getElementById('closebutton').click();
    }, 500);


  }

  render(){
      return(
        <div className = "playlistname" onClick={playListId => this.onclickPlayListSelect(this.props.id)}>
          {this.props.name}
        </div>
      );
  }

}


export default PlayListName;

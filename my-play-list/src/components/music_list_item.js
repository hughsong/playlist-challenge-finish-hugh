import React from 'react';

class MusicListItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      id:-1,
    };

  }


  onclickMusicSelect(num){
      this.setState({num});
      setTimeout(()=> {
        this.props.onMusicSelect(num);
      }, 500);
  }


  render(){

    return(
          <div className="musicItem">
            <div className = "music_title" onClick={id => this.onclickMusicSelect(this.props.music.id)}>
                {this.props.music.title}

            <button type="button" className="btn btn-link btn-sm addIcon" data-toggle="modal" data-target="#exampleModal">
                <span className="glyphicon glyphicon-plus popWindows"></span>
            </button>
            </div>
          </div>
    );

  }
}


export default MusicListItem;

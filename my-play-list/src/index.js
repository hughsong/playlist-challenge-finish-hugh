import React from 'react';
import ReactDOM from 'react-dom';
import AllMusicList from './components/all_Musics_list.js';
import PlayListLayout from './components/playList_list.js';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      playList:[]
    };
  }

  componentDidMount() {
    fetch("/library/", {
      method:'GET',
      mode: 'cors',
      headers: {
      //  'Content-Type': 'application/x-www-form-urlencoded'
    },
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );

      fetch("/playlist/", {
        method:'GET',
        mode: 'cors',
        headers: {
        //  'Content-Type': 'application/x-www-form-urlencoded'
      },
      })
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            this.setState({
              playList: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              error
            });
          }
        )
  }

  render(){
    return(
      <div className="main">
          <PlayListLayout myPlayList = {this.state.playList} />
          
          <div className="musicList">
            <AllMusicList musics = {this.state.items} myPlayList = {this.state.playList} />
          </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

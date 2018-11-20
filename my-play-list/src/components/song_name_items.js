import React from 'react';

class SongNameItem extends React.Component{

  constructor(props){
    super(props);

    this.state={
              songName:[],
              error:null
    };
  }

  componentDidMount() {
    fetch("/library/"+this.props.mysong+"/", {
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
          songName: result
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
      <div>
        <p>{this.state.songName.title}</p>
      </div>
    )

  }

}

export default SongNameItem;

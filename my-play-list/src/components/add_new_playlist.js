import React from 'react';

class AddNewPlaylist extends React.Component{
  constructor(props){
    super(props);

    this.state={
              name:''
    };
  }

  onInputChange(name){
    this.setState({name});
  }


  saveList(name){
    fetch('/playlist/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        "name": name,
        "songs": []
      })
    })
    window.location.reload();

  }

  render(){

    return(
      <div>
        <div className="createIcon">
          <button type="button" className="btn btn-default btn-lg" data-toggle="modal" data-target="#exampleModal1">
              <span className="glyphicon glyphicon-plus"></span> Create New List
          </button>
        </div>

        <div className="modal fade" id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                      <h4>Edit Your PlayList Info.</h4>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      </button>
                  </div>
                  <div className="modal-body">
                     Name: <input onChange={event=>this.onInputChange(event.target.value)} />
                  </div>
                  <div className="modal-footer">
                      <button type="button" id="savebutton" className="btn btn-first"  onClick={()=>this.saveList(this.state.name) } data-dismiss="modal">Save</button>
                      <button type="button" id="closebutton" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
              </div>
         </div>
        </div>
    </div>
    )
  }

}

export default AddNewPlaylist;

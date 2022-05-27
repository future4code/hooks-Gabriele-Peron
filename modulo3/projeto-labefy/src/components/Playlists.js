import React from "react";
import axios from "axios";

class Playlists extends React.Component{
  state = {
    name:''
    
}

newName = (event) =>{
    this.setState({name: event.target.value})
}

createPlaylist = ()=>{
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
  
  const body = {
    name: this.state.name
  }

  const headers ={
    headers:{
      Authorization: "gabriele-peron-hooks"
    }
  }

  axios.post(url, body, headers)
  .then((res)=>{
    alert(`Playlist ${this.state.name} foi criada com sucesso!!`)
  })
  .catch((err)=>{
    alert(err.response.data.messsage)
  })
}


  render(){
    return (
      <div>

<h1>Crie sua Playlist:</h1>
<button className="botao" onClick={this.props.IrParaLista}>Criar</button>
              <br />
              <input className="input"
              placeholder= 'Nome'
              value={this.state.name}
              onChange={this.newName}/>
              </div>
    )
  }
}

export default Playlists
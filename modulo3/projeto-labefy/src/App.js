import React from "react"
import AddMusic from "./components/AddMusic"
import Playlists from "./components/Playlists"

class App extends React.Component{
  state={
    tela:"playlist"
  }

  trocaTela = () => {
    switch(this.state.tela){
      case 'playlist':
        return<Playlists IrParaAddMusic={this.IrParaAddMusic}/>
      case 'addMusic':
        return<AddMusic IrParaPlaylists={this.IrParaPlaylists}/>
      default:
        return 
    }
  }


  IrParaAddMusic = () => {
    this.setState({tela: 'addMusic'})
  }

  IrParaPlaylists = () => {
    this.setState({tela: 'playlist'})
  }
  render(){
    return(
      <div>

      <h2>Labefy</h2>
      
      {this.trocaTela}
      
      </div>
    )
  }
}

export default App;

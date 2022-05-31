import React from "react"
import CriarPlaylists from "./components/CriarPlaylists"
import DetalhePlaylist from "./components/DetalhePlaylist"
import ListaPlaylists from "./components/ListaPlaylists"
import styled from "styled-components"
import logo from "./img/logo.png"

const Container = styled.div `
  display: flex;
  flex-direction: column;
  
`

const Header = styled.div`
  background-color: #ffff;
  display: flex;
  justify-content: space-between;
`
const Logo = styled.img `
  height: 100px;
  margin: 10px 0 10px 20px;
`



const ButtonHeader = styled.button `
  background-color: #28A830;
  color: #ffffff;
  margin: 20px 30px;
  padding: 5px 20px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 15px;
  border-color: green;
  font-family: -apple-system, sans-serif;
`
const Footer = styled.footer `
  background-color: #ffff;
`

const TextoFooter = styled.p `
  font-size: 15px;
  font-family: sans-serif;
  color: green ;
  text-align: center;
`


export default class App extends React.Component {

  state = {
    tela: "criarPlaylist"
  }

  escolheTela = () => {
    switch(this.state.tela) {
      case "criarPlaylist":
        return <CriarPlaylists irListaPlaylists={this.irListaPlaylists} />
      case "listaPlaylists":
        return <ListaPlaylists irCriarPlaylist={this.irCriarPlaylist} />
      case "detalhePlaylist":
        return <DetalhePlaylist irListaPlaylists={this.irListaPlaylists} />
      default:
        return <p>Nenhuma página foi encontrada.</p>
    }
  }

  irCriarPlaylist = () => {
    this.setState({tela: "criarPlaylist"})
  }

  irListaPlaylists = () => {
    this.setState({tela: "listaPlaylists"})
  }

  render() {
    return (
      <Container>
        <Header>
            <Logo src= {logo} />
            <ButtonHeader>LOGIN</ButtonHeader>
          </Header>

          <div>
            {this.escolheTela()}
          </div>

          <Footer>
            <TextoFooter>&copy; Labefy</TextoFooter>
          </Footer>
        </Container>
    )
  }
}

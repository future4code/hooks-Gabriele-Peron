import axios from "axios";
import React from "react";
import styled from "styled-components"
import DetalhePlaylist from "./DetalhePlaylist";

const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 100px 150px 50px 150px;
    min-height: 500px;
    background-color: #28A830;
    font-family:  sans-serif;
`

const ContainerPlaylist = styled.div `
    background-color: rgba(00,00,00,.7);
    border-bottom: 3px solid #ffffff;
    display: flex;
    width: 900px;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`

const NomePlaylist = styled.p`
    color: #ffffff;
    font-size: 20px;
`

const Botao = styled.button `
    background-color: #28a830;
    color: #ffffff;
    border-radius: 10px;
    border-color: green;
    padding: 10px;
    margin-left: 10px;
`
const BotaoVoltar = styled.button `
    background-color: #000000;
    color: #ffffff;
    border-radius: 10px;
    border-color: green;
    padding: 15px 30px;
    font-size: 20px;
    width: 120px;
`

export default class ListaPlaylists extends React.Component {

    state = {
        playlists:[],
        detalhes: false,
        selecionar: ""
    }

    componentDidMount () {
        this.pegarPlaylists()
    }

    pegarPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"
        const headers = {
            headers: {
                Authorization: "gabriele-peron-hooks"
            }
        }

        

        axios.get(url,headers)
        .then((res)=>{
            this.setState({playlists: res.data.result.list})
        })
        .catch((err)=>{
            alert("Ops, algo deu errado!!")
        })
    }

    deletaPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        const headers = {
            headers: {
                Authorization: "gabriele-peron-hooks"
            }
        }

        axios.delete(url,headers)
        .then(()=>{
            alert ("Playlist deletada!")
            this.pegarPlaylists()
        })
        .catch((err)=>{
            alert (err.response.data.message)
        })
    }

    irDetalhePlaylist = (trackId) => {
        this.setState({detalhes: true, selecionar: trackId})
      }

      detalhesVoltar = () => {
          this.setState({detalhes: false})
      }

    render () {

        if (this.state.detalhes) {
            return(
                <DetalhePlaylist
                    detalhesVoltar = {this.detalhesVoltar}
                    selecionar = {this.state.selecionar}
                />
            )
        }
        
        const boxPlaylists = this.state.playlists.map((play)=>{
            return (
                <ContainerPlaylist key={play.id}>
                    <NomePlaylist>{play.name}</NomePlaylist>
                    <div>
                        <Botao onClick={() => this.irDetalhePlaylist(play)}>Detalhe</Botao>
                        <Botao onClick={() => this.deletaPlaylist(play.id)}>Excluir</Botao>
                    </div>
                    
                </ContainerPlaylist>
            )
        })


        return (
            <Container>
                <div>
                    {boxPlaylists}
                </div>
                <BotaoVoltar onClick={this.props.irCriarPlaylist}>Voltar</BotaoVoltar>
            </Container>
        )
    }
}
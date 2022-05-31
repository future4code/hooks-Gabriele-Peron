import axios from "axios";
import React from "react";
import styled from "styled-components";


const ContainerPrincipal = styled.div `
    background-color: #28a830;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 500px;
    padding: 50px;
`
const ContAdicionarMusica = styled.div`
    background-color: rgba(00,00,00,.7);
    border-bottom: 3px solid #ffffff;
    display: flex;
    flex-direction: column;
    width: 900px;
    align-items: center;
    padding: 0 20px;
    gap: 10px;
    
`
const Titulo = styled.p`
    font-family: sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;
`

const Input = styled.input`
    border-color: 0;
    height: 25px;
    font-size: 15px;
    border-radius: 10px;
`

const Button = styled.button `
    background-color: #28a830;
    color: #ffffff;
    padding: 10px 30px;
    font-size: 15px;
    border-radius: 10px;
    border-color: green;
    margin-bottom: 50px;
    margin-top: 20px;
`

const ContMusica = styled.div `
    background-color: rgba(00,00,00,.7);
    border-bottom: 3px solid #ffffff;
    display: flex;
    justify-content: space-between;
    width: 900px;
    height: 80px;
    align-items: center;
    padding: 0 20px;
    gap: 10px;
`

const NomeMusica = styled.p `
    font-family: sans-serif;
    font-size: 20px;
    color: #ffffff;
`

const ExcluirButton = styled.button`
    background-color: #28a830;
    color: #ffffff;
    padding: 10px 30px;
    font-size: 15px;
    border-radius: 10px;
    border-color: green;
    
`
const BotaoVoltar = styled.button `
    background-color: #083812;
    color: #ffffff;
    border-radius: 10px;
    border-color: green;
    padding: 15px 30px;
    font-size: 20px;
    width: 120px;
    margin-top: 50px;
`

export default class DetalhePlaylist extends React.Component {
    
    state = {
        name: "",
        artist: "",
        url: "",
        listaMusicas: []
    }

    componentDidMount() {
        this.pegarMusicas()
    }

    pegarMusicas = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selecionar.id}/tracks`
        const headers = {
            headers: {
                Authorization: "gabriele-peron-hooks"
            }
        }

        axios.get(url,headers)
        .then((res)=>{
            this.setState({listaMusicas:res.data.result.tracks})
            return(res.data.result.tracks)
        })
        .catch((err)=>{
            return(err)
        })
    }

    adicionarMusica = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selecionar.id}/tracks`
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }
        const headers = {
            headers: {
                Authorization: "gabriele-peron-hooks"
            }
        }

        axios.post(url,body,headers)
        .then((res)=>{
            this.setState({name:"", artist: "", url: ""})
            this.pegarMusicas()
            alert("Música adicionada com sucesso!")
        })
        .catch(()=>{
            alert("Não foi possível adicionar a música. Tente novamente!")
        })
    }

    removeMusica = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selecionar.id}/tracks/${id}`
        const headers = {
            headers: {
                Authorization: "gabriele-peron-hooks"
            }
        }

        axios.delete(url,headers)
        .then(()=>{
            alert("Música excluída com sucesso.")
            this.pegarMusicas()
        })
        .catch((err)=>{
            return(err.response.data.message)
        })
    }

    nome = (event) => {
        this.setState({ name: event.target.value });
      };
    
      artista = (event) => {
        this.setState({ artist: event.target.value });
      };
    
      url = (event) => {
        this.setState({ url: event.target.value });
      }; 
    
    render () {

        const musicasAdicionadas = this.state.listaMusicas.map((musica)=>{
            return(
                <ContMusica key={musica.id}>
                        <NomeMusica>{musica.name} - {musica.artist}</NomeMusica>

                        <audio preload controls>
                            <source src={musica.url} type= "audio/mp3" />
                        </audio>
                        <ExcluirButton onClick={() => this.removeMusica(musica.id)}>Excluir música</ExcluirButton>
                </ContMusica>
            )
        }) 

        return (
            <ContainerPrincipal>
                <ContAdicionarMusica>
                    <Titulo>Adicione uma música:</Titulo>
                    <Input 
                        placeholder="Nome da música"
                        value = {this.state.name}
                        onChange = {this.nome}
                    />
                    <Input 
                        placeholder="Nome do artista/banda"
                        value = {this.state.artist}
                        onChange = {this.artista}
                    />
                    <Input 
                        placeholder="Link da música"
                        value = {this.state.url}
                        onChange = {this.url}
                    />
                    <Button onClick={this.adicionarMusica}>Adicionar música</Button>
                </ContAdicionarMusica>

                <div>{musicasAdicionadas}</div>
               
                <BotaoVoltar onClick={this.props.irListaPlaylists}>Voltar</BotaoVoltar>

            </ContainerPrincipal>
            
            

            
        )
    }
}
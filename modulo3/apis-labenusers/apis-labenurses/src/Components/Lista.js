import React from "react";
import axios from "axios";
import styled from "styled-components"

const Container=styled.div`
display: flex;
flex-direction: column;
margin: 20px;

.voltar{
  display: flex;
  width: 110px;
  justify-content: center;
}
`

const Usuario = styled.div`
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    width: 200px;
    
`
const DeleteUser = styled.button`
    color: red;
    cursor: pointer;
`

class Lista extends React.Component {

    state ={
        lista: []
    }

    componentDidMount (){
        this.getAllUsers()
    }

    getAllUsers = () =>{
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

        const headers ={
            headers: {
                Authorization: "gabriele-peron-hooks"
            }
        }   
        axios.get(url, headers)
        .then((res)=>{
            this.setState({lista: res.data})
        })
        .catch((err)=>{
            console.log(err.response.data.message)
        })
    }

    deleteUser = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        const headers ={
            headers: {
                Authorization: "gabriele-peron-hooks"
            }
        }

        axios.delete(url, headers)
        .then(()=>{
            alert('Usuário deletado')
            this.getAllUsers()
        })
        .catch((err)=>{
            alert(err.response.data.message)
        })
    }

    render() {
        const listaUsuarios = this.state.lista.map((user)=>{
            return(
                <Usuario key={user.id}>
                    <h4>{user.name}</h4>
                    <DeleteUser onClick={()=> this.deleteUser(user.id)}>X</DeleteUser>
                </Usuario>
            )
        })

        return(
            <Container>
              <h1>Usuários Cadastrados</h1>
                <button className="voltar" onClick={this.props.IrParaCadastro}>Trocar de Tela</button>
                {listaUsuarios}
            </Container>
        )

    }
}

export default Lista;
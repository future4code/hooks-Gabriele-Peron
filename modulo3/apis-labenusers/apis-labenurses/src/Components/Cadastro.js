import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container=styled.div`
display: flex;
flex-direction: column;
margin: 20px;


.botao{
  display: flex;
  width: 110px;
  justify-content: center;
}

.input{
  width: 250px;
}
`

class Cadastro extends React.Component {

  state = {
      name:'',
      email:''
  }

  newName = (event) =>{
      this.setState({name: event.target.value})
  }

  newEmail = (event) =>{
      this.setState({email: event.target.value})
  }

  createUser = () =>{
      const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
      const body={
          name: this.state.name,
          email: this.state.email
      }
      const headers ={
          headers: {
              Authorization: "gabriele-peron-hooks"
          }
      }

      axios.post(url, body, headers)
      .then((res)=>{
          alert('Usuário cadastrado com sucesso!!')
          this.setState({name: '', email: ''})
      })
      .catch((err)=>{
          alert(err.response.data.message)
      })
  }
  
  render(){
      return(
          <Container>
            <h1>Cadastro</h1>
              <button className="botao" onClick={this.props.IrParaLista}>Trocar de Tela</button>
              <br />
              <input className="input"
              placeholder= 'Nome'
              value={this.state.name}
              onChange={this.newName}/>

              <input className="input"
              placeholder= 'E-mail'
              value={this.state.email}
              onChange={this.newEmail} />

              <button className="botao" onClick={this.createUser}>Criar Usuário</button>
          </Container>
      )
  }
}

export default Cadastro;
import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
border: solid 2px;
height: 100vh;
border-radius: 14px;
margin: 0 auto;
padding: 20px;
display: flex;
justify-content: space-between;
flex-direction: column;
background-color: #1E6310;
`

const MensagemContainer = styled.div`
flex-grow: 1;
padding:10px;
display: flex;
flex-direction: column-reverse;
background-image: url(https://i.pinimg.com/564x/0f/05/27/0f05274b1bdc8feed70822513cd7a903.jpg);

`
const InputContainer = styled.div`
  display: flex;
  color:greenyellow
`

const NameInput = styled.input`
  width: 100px;
   
`

const MensagemInput = styled.input`
  flex-grow: 1;
`
const Imprime = styled.div`
color: 004b23;
`

class Mensagem extends React.Component {
  state = {
    pessoas: [],    
    valorInputPessoa: "",
    valorInputMensagem: "" 
  };

  
  
  onChangeInputPessoa = (event) => {
        this.setState({ valorInputPessoa: event.target.value });
  };

  onChangeInputMensagem = (event) => {
        this.setState({ valorInputMensagem: event.target.value });
  };

  onClickEnviar = () => {    
    const novaPessoa = {
      usuario: this.state.valorInputPessoa,
      mensagem: this.state.valorInputMensagem  
    };

    const novaPessoas = [...this.state.pessoas, novaPessoa];

    this.setState({ pessoas: novaPessoas, valorInputMensagem:'' });
  };

  render() {
       return (
        <AppContainer>
        <MensagemContainer>
          {this.state.pessoas.map((mensagem, index) => {
            return <Imprime key={index}>
              <strong>{mensagem.usuario}</strong> : {mensagem.mensagem}
            </Imprime>
          })}
        </MensagemContainer>
        <InputContainer>
          <NameInput
            value={this.state.valorInputPessoa}
            onChange={this.onChangeInputPessoa}
            placeholder={"Usuário"}
          />
          <MensagemInput
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}
          />
          <button onClick={this.onClickEnviar}>Enviar</button>
          </InputContainer>
          </AppContainer>       
    );
  }
}


export default Mensagem
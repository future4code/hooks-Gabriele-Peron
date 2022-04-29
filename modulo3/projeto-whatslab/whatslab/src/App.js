import logo from './logo.svg';
import './App.css';
import Mensagem from './components/Mensagem'

import styled from 'styled-components';



const Container = styled.div`
width: 100vh;
height: 80vh;
border-radius: 14px;
margin: 0 auto;
padding: 20px;
display: flex;
flex-direction: column;

`

function App() {
  return (
    <Container>
      <Mensagem/>
      
      </Container>
  );
}

export default App;

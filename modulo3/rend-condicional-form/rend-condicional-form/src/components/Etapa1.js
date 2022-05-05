import React from "react";
import styled from "styled-components";


const ContainerEtapa1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;

`

class Etapa1 extends React.Component {

    render () {
        return (
          <div>
              <ContainerEtapa1>
              <h1>ETAPA 1: DADOS GERAIS</h1>
              <p> 1. Qual o seu nome?</p>
              <input/>
              <p>3. Qual sua Idade?</p>
              <input/>
              <p>2. Qual seu email?</p>
              <input/>
              <p>4. Qual sua escolaridade?</p>
              <div>
                  <select>
                      <option>Ensino Médio incompleto</option>
                      <option>Ensino Médio completo</option>
                      <option>Ensino Superior incompleto</option>
                      <option>Ensino Superior completo</option>
                  </select>
              </div>
              </ContainerEtapa1>
          
          </div>
        );
      }
    }
      export default Etapa1
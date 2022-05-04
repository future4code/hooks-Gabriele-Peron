import React from "react";
import styled from "styled-components";

const ContainerEtapa3 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;

`
const ContainerOpcoes = styled.div`
padding: 50px;
`


class Etapa3 extends React.Component{
    render(){
        return(
            <div>
                <ContainerEtapa3>
                    <h1>ETAPA 3 - INFORMAÇÔES GERAIS DE ENSINO</h1>
                    <p>5. Por que você não terminou o curso de graduação?</p>
                    <input/>
                    <p>6. Você fez algum curso Complentar?</p>

                    <ContainerOpcoes>
                        <select>
                            <option>Nenhum</option>
                            <option>Curso Técnico</option>
                            <option>Curso de Inglês</option>
                        </select>
                    </ContainerOpcoes>
                </ContainerEtapa3>
            </div>
        )
    }
}

export default Etapa3
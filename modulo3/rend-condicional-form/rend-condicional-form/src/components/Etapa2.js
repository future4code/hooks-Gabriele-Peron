import React from "react";
import styled from "styled-components";

const ContainerEtapa2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;

`

class Etapa2 extends React.Component{
    render(){
        return(
            <div>
                <ContainerEtapa2>
                    <h1>ETAPA 2 - INFORMAÇÔES DO ENSINO SUPERIOR</h1>
                    <p>5. Qual curso?</p>
                    <input/>
                    <p>6. Qual unidade de ensino?</p>
                    <input/>
                </ContainerEtapa2>
            </div>
        )
    }
}

export default Etapa2
import React from "react";
import styled from "styled-components";

const ContainerFinal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;

`

class Final extends React.Component{
    render(){
        return(
            <div>
                <ContainerFinal>
                    <h1>O FORMULÁRIO ACABOU</h1>
                    <h3>Muito obrigado por participar!Entraremo em contato!</h3>
                </ContainerFinal>
            </div>
        )
    }
}

export default Final
import React from 'react';
import './CardGrande.css'
import styled from 'styled-components';


const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const Imagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`


const Tiulo = styled.h4`
    margin-bottom: 15px;
`

const Card = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardGrande;
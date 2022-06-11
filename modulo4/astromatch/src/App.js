import React from 'react'
import './App.css'
import { useState } from 'react'
import axios from 'axios'
import MainScreen from './components/MainScreen/MainScreen'
import MatchScreen from './components/MatchScreen/MatchScreen'
import { BASE_URL } from './constants'
import styled from 'styled-components'

const BtnClear = styled.button`
  border-radius: 30px;
  background-color: #40e0d0;
  border: solid 1px;
  border-color: #40e0d0;
  padding: 4px;
  width: 130px;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;

  &:hover {
    background-color: purple;
    color: white;
    border: 1px solid purple;
  }
`

const AppContainer = styled.div`
  width: 400px;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
  display: flex;
  flex-direction: column;
`

const ContainerHeader = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 10px;
`

const Logo = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-image: linear-gradient(to right, #40e0d0 50%, purple 50%);
  color: black;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 200%;
  margin-top: 20px;
  &:hover {
    background-image: linear-gradient(to right, purple 50%, #40e0d0 50%);
    color: black;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const App = () => {
  const [currentPage, setCurrentPage] = useState('main')

  const chooseScreen = () => {
    switch (currentPage) {
      case 'main':
        return <MainScreen onChangeMatchScreen={onChangeMatchScreen} />
      case 'match':
        return <MatchScreen onChangeMainScreen={onChangeMainScreen} />

      default:
        ;<p>Ops, algo deu errado!!!</p>
    }
  }
  const onChangeMainScreen = () => setCurrentPage('main')
  const onChangeMatchScreen = () => setCurrentPage('match')

  const deleteMatch = () => {
    axios
      .put(`${BASE_URL}/clear`)
      .then(res => setCurrentPage('main'))
      .catch(err => console.log(err))
  }

  return (
    <AppContainer>
      <ContainerHeader>
        <Logo>astroMatch</Logo>
      </ContainerHeader>
      {chooseScreen()}
      <BtnClear onClick={deleteMatch}>Limpar Matches</BtnClear>
    </AppContainer>
  )
}

export default App

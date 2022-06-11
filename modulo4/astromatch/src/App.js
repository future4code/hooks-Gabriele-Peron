import React from 'react';
import './App.css';
import { useState } from 'react';
import MainScreen from "./components/MainScreen/MainScreen"
import MatchScreen from "./components/MatchScreen/MatchScreen"
import { BASE_URL } from './constants';

const App = ()=>{
  const[currentPage, setCurrentPage] = useState ("main")

  const chooseScreen =() =>{
    switch (currentPage) {
      case "main":
        return<MainScreen onChangeMatchScreen = {onChangeMatchScreen}/>
        case "match":
          return<MatchScreen onChangeMainScreen = {onChangeMainScreen}/>     
            
      default:
        <p>Ops, algo deu errado!!!</p>
    }
  }
  const onChangeMainScreen=()=>setCurrentPage("main")
  const onChangeMatchScreen=()=>setCurrentPage("match")

  const deleteMatch=()=>{
    axios
    .put(`${BASE_URL}/clear`)
    .then((res)=>setCurrentPage("main"))
    .catch((err)=>console.log(err))
  }

  return(
    
    <div>
      {currentPage()}
      <BtnClear onClick={deleteMatch}>Limpar Matches</BtnClear>
    </div>
  )
  
}

export default App;

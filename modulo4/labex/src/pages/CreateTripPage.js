import { useNavigate } from "react-router-dom"
import { Container, planets, URL } from "../hooks/Constants"
import { goBack, detailPage, createTrip, login, adminPage, goHome } from "../hooks/Coordinator"
import { UseProtecdPage } from "../hooks/UseProtecdPage"
import {useForm} from "../hooks/useForm"
import axios from "axios"
import swal from "sweetalert"
import styled from "styled-components"

 const ContainerCreate = styled.div`
  position: absolute;
  width:100vw;
  height:100vh;
  
  background-repeat: no-repeat;
  background-size:cover;
`

 const ContainerBoxForm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`

 const Option = styled.option`
  color: #39d0e8;
  background-color: black;
`

 const Title = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
  font-family: sans-serif;
`

 const ContainerInput = styled.div`
  position: relative;
`

const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #39d0e8;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  font-family: sans-serif;
    :focus-within {
      top: -20px;
      left: 0;
      color: #39d0e8;
      font-size: 12px;
    }
    :valid {
      top: -20px;
      left: 0;
      color: #39d0e8;
      font-size: 12px;
    }
`

const ButtonCreate = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #39d0e8;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
    :hover {
      background: #39d0e8;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px;
    }
`


const ButtonHome = styled.button`
  padding: 10px 20px;
  transition: 0.5s;
  margin-top: 50px;
  margin-left: 1100px;
  background-color: transparent;
  border: none;
    :hover {
      background: #39d0e8;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px;
    }
`


const ButtonAdmin = styled.button`
  padding: 10px 20px;
  transition: 0.5s;
  margin-top: 50px;
  margin-left: 1100px;
  background-color: transparent;
  border: none;
    :hover {
      background: #39d0e8;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px;
    }
`

const ButtonLogout = styled.button`
  padding: 10px 20px;
  transition: 0.5s;
  margin-top: 50px;
  margin-left: 1100px;
  background-color: transparent;
  border: none;
    :hover {
      background: #39d0e8;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px;
    }
    
`

const Select = styled.select`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #39d0e8;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  font-family: sans-serif;
  :focus-within {
    top: -20px;
    left: 0;
    color: #39d0e8;
    font-size: 12px;
  }
  :valid {
    top: -20px;
    left: 0;
    color: #39d0e8;
    font-size: 12px;
  }
`


const CreateTripPage = ()=>{
  UseProtecdPage()
  const navigate = useNavigate()
  const {form, onChange, cleanfields} = useForm({name:"", planet:"", date:"", description:"", durationInDays:""})

  const logOut =()=>{
    localStorage.removeItem("token")
    login(navigate)
  }

  const postCreateTrip = (event)=>{
    event.preventDefault()
    const headers = {
      headers:{
      auth: localStorage.getItem("token")
    }

  }
 axios
 .post(`${URL}/trips`, form, headers)
 .then((res)=>{
   alert("Viagem criada com sucesso!!")
 })
 .catch((err)=>{
   alert("Ops, algo deu errado, tente novamente.")
 })
  
cleanfields()
  }


  return (
    <ContainerCreate>
      <ContainerBoxForm>
        <Title>Crie sua Viagem</Title>
        <form onSubmit={postCreateTrip}>
          <ContainerInput>
            <Input
              placeholder="Nome da sua Viagem"
              name={"name"}
              value={form.name}
              onChange={onChange}
              required
              minlength={5}
              type={"text"}
            />
          </ContainerInput>
          <ContainerInput>
          <Select
            name={"planet"}
            value={form.planet}
            onChange={onChange}
            required
          >
            <Option value={""} disabled selected>Planetas</Option>
            {planets.map((planet)=>{
              return <Option key={planet}>{planet}</Option>
            })}
          </Select>
          </ContainerInput>
          <ContainerInput>
            <Input 
              placeholder="Dia da Viagem" 
              name={"date"} 
              value={form.date} 
              onChange={onChange}
              required
              type={"date"}
            />
          </ContainerInput>
          <ContainerInput>
            <Input 
              placeholder="Quantos dias vai durar a viagem?" 
              name="durationInDays" 
              value={form.durationInDays} 
              onChange={onChange}
              required 
              type={"number"}
              min={50}
            />
          </ContainerInput>
          <ContainerInput>
            <Input
              placeholder="Descreva sua Viagem"
              name="description"
              value={form.description}
              onChange={onChange}
              minlength={30}
              type={"text"}
              required
            />
          </ContainerInput>
          <ButtonCreate type={"submit"}>Criar</ButtonCreate>
        </form>
      </ContainerBoxForm>
      <ButtonAdmin onClick={() => goBack(navigate)}>Voltar</ButtonAdmin>
      <ButtonHome onClick={() => goHome(navigate)}>Home</ButtonHome>
      <ButtonLogout onClick={() => logOut()}>logOut</ButtonLogout>
    </ContainerCreate>

  )
  
}

export default CreateTripPage
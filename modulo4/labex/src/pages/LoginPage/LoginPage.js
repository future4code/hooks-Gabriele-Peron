import { useNavigate } from 'react-router-dom'
import { ContainerHome } from '../HomePage/HomePageStyled'
import { goBack } from '../../hooks/Coordinator'
import { LoginBox, Button } from './LoginPageStyled'
import { useState } from 'react'
import axios from 'axios'
import { URL } from '../../hooks/Constants'

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onChangeEmail = (Event) =>{
    setEmail(Event.target.value)
  }

  const onChangePassword = (Event) =>{
    setPassword(Event.target.value)

  }

  const onSubmitLogin = ()=>{
    //console.log(email,password)

    const body={
      email: email,
      password: password
    }

    axios.post (`${URL}/login`, body)
    .then((res)=>{
      localStorage.setItem("token", res.data.token)
      navigate("/login/adminPage/detailPage")
    })
    .catch((error)=>{
      alert ("Usuário ou senha incorretos")
    })


  }

  return (
    <ContainerHome>
      <LoginBox>
        <form>
          <div class="user-box">
        <h1>Login</h1>
            <input type="email" placeholder="Email" value={email} onChange={onChangeEmail}/>
                      </div>
          <div class="user-box">
            <input type="password" placeholder="Password" value={password} onChange={onChangePassword} />
            
          </div>
        </form>
        <Button onClick={() => goBack(navigate)}>Voltar</Button>
        <Button onClick={onSubmitLogin}>Login</Button>
      </LoginBox>
    </ContainerHome>
  )
}

export default LoginPage

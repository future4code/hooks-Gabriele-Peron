import { useNavigate } from "react-router-dom"
import { Container } from "../hooks/Constants"
import { goBack } from "../hooks/Coordinator"

const LoginPage = ()=>{
  const navigate = useNavigate()


return(
  <Container>
    <button onClick={()=> goBack (navigate)}>Voltar</button>
    <button>Login</button>
   
  </Container>
)

}

export default LoginPage
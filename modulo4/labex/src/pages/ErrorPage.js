import { useNavigate } from "react-router-dom"
import { Container } from "../hooks/Constants"

const ErrorPage = ()=>{
  const navigate = useNavigate()


return(
  <Container>
   <p>Algo deu errado</p>
    
  </Container>
)

}

export default ErrorPage
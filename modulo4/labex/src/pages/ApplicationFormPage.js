import { useNavigate } from "react-router-dom"
import { Container } from "../hooks/Constants"
import { goBack } from "../hooks/Coordinator"

const ApplicationFormPage = ()=>{
  const navigate = useNavigate()


return(
  <Container>
    <button onClick={()=> goBack (navigate)}>Voltar</button>
    
  </Container>
)

}

export default ApplicationFormPage
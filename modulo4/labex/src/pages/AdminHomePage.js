import { useNavigate } from "react-router-dom"
import { Container } from "../hooks/Constants"
import { goBack, detailPage, createTrip } from "../hooks/Coordinator"

const AdminHomePage = ()=>{
  const navigate = useNavigate()


return(
  <Container>
    <button onClick={()=> goBack (navigate)}>Voltar</button>
    <button onClick={()=> createTrip (navigate)}>Criar Viagem</button>
    <button onClick={()=> detailPage (navigate)}>Ver Inscritos</button>
  </Container>
)

}

export default AdminHomePage
import { useNavigate } from "react-router-dom"
import { Container } from "../hooks/Constants"
import { goBack, applicationToTrip } from "../hooks/Coordinator"

const ListTripsPage = ()=>{
  const navigate = useNavigate()


return(
  <Container>
    <button onClick={()=> goBack (navigate)}>Voltar</button>
    <button onClick={()=> applicationToTrip (navigate)}>Ver Viagens</button>
  </Container>
)

}

export default ListTripsPage
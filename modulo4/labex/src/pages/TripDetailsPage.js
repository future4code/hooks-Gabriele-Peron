import { useNavigate } from "react-router-dom"
import { goBack, detailPage, createTrip } from "../hooks/Coordinator"
import { Container } from "../hooks/Constants"

const TripDetailPage = ()=>{
  const navigate = useNavigate()


return(
  <Container>
    <button onClick={()=> goBack (navigate)}>Voltar</button>
    
  </Container>
)

}

export default TripDetailPage
import { useNavigate } from "react-router-dom"
import { Container } from "../hooks/Constants"
import { goBack, detailPage, createTrip } from "../hooks/Coordinator"
const CreateTripPage = ()=>{
  const navigate = useNavigate()


return(
  <Container>
    <button onClick={()=> goBack (navigate)}>Voltar</button>
    
  </Container>
)

}

export default CreateTripPage
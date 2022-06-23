import { useNavigate } from "react-router-dom"
import { goBack, detailPage, createTrip, goHome } from "../hooks/Coordinator"
import { Container, URL } from "../hooks/Constants"
import { useEffect } from "react"
import axios from "axios"
import { UseProtecdPage} from "../hooks/UseProtecdPage"


const TripDetailPage = ()=>{
  UseProtecdPage()
  const navigate = useNavigate()


  useEffect(()=>{
    const headers = {
      headers:{
        auth:localStorage.getItem("token", headers)
        .then((res)=>{console.log(res.data.trip)})
        .catch((err)=>{console.log(err.response.data.message)})
      }
    }

    axios
    .get(`${URL}/populate`)
  })

return(
  <Container>
    <button onClick={()=> goHome (navigate)}>Voltar</button>
    
  </Container>
)

}

export default TripDetailPage
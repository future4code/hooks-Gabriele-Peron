import { useNavigate } from "react-router-dom"
import { Buttons, ContainerButtons, ContainerHome, Logo } from "./HomePageStyled"
import logo from "../../img/logo.png"
import { GiSpaceShuttle } from "react-icons/gi";
import { BiLogInCircle } from "react-icons/bi";

const HomePage = ()=>{
  const navigate = useNavigate()
  const goToLogin = ()=> navigate('Login')
  const goToTrips = ()=> navigate('ListTrips')


return(
  <ContainerHome>
    <div>
      <Logo src={logo}/>
    </div>
    <ContainerButtons>

    <Buttons onClick={()=> goToLogin (navigate)}><BiLogInCircle size={50} color="white"/>AREA ADM</Buttons>
    <Buttons onClick={()=> goToTrips (navigate)}><GiSpaceShuttle  size={50} color="white" /> VER VIAGENS</Buttons>
    </ContainerButtons>
  </ContainerHome>
)

}

export default HomePage
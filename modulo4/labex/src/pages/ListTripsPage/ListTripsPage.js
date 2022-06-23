import { useNavigate } from 'react-router-dom'
import { Box } from './ListTripsPageStyled'
import { goHome, applicationToTrip } from '../../hooks/Coordinator'
import {
  ContainerButtons,
  Buttons,
  ContainerHome
} from '../HomePage/HomePageStyled'
import { AiOutlineHome } from 'react-icons/ai'


const ListTripsPage = () => {
  
  const navigate = useNavigate()

  return (
    <ContainerHome>
      <Box>
        <img src="https://i.pinimg.com/736x/41/e9/c7/41e9c7d1acfd54fd8aad425a3aca5a5a.jpg" />
        <p>CSS</p>
        <img src="https://assets.catawiki.nl/assets/2020/1/19/8/d/1/8d1031d3-915e-4b7f-a1fd-676d49756748.jpg" />
        <p>CSS</p>

        <ContainerButtons>
          <Buttons onClick={() => goHome(navigate)}><AiOutlineHome size={50} color="#fff" />
                        HOME
          </Buttons>
        </ContainerButtons>
      </Box>
    </ContainerHome>
  )
}

export default ListTripsPage

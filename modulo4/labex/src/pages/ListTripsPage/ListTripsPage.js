import { useNavigate } from 'react-router-dom'
import { Box } from './ListTripsPageStyled'
import { goHome, applicationToTrip } from '../../hooks/Coordinator'
import {
  ContainerButtons,
  Buttons,
  ContainerHome
} from '../HomePage/HomePageStyled'
import { AiOutlineHome } from 'react-icons/ai'
import axios from 'axios'
import { URL } from '../../hooks/Constants'
import { useEffect } from 'react'


import { useRequestData } from '../../hooks/UseRequestData'
import { ContainerListTrips,ListRender, ButtonHome, Loading } from './ListTripsPageStyled'
import { CardTrips } from "../../components/CardTrips"


const ListTripsPage = () => {
  
  const navigate = useNavigate()
  
  const [listTrips, setListTrips, isLoading] = useRequestData(`/trips`,{})


  
  const renderedTripsList = listTrips.trips && listTrips.trips.map((trip) => {
    return (
        <CardTrips
          id={trip.id}
          name={trip.name}
          description={trip.description}
          planet={trip.planet}
          durationInDays={trip.durationInDays}
          date={trip.date}
        />
        
    )
  })

  return (
    <ContainerListTrips>
      {isLoading ? <Loading></Loading> : <ListRender>{renderedTripsList}</ListRender>}
      <ButtonHome onClick={() => goHome(navigate)}>home</ButtonHome>
    </ContainerListTrips>
  )
}
  

  /*return (
    <ContainerHome>
      <Box>
        <h2>labeX</h2>

        

        <ContainerButtons>
          <Buttons onClick={() => goHome(navigate)}><AiOutlineHome size={50} color="#fff" />
                        HOME
          </Buttons>
        </ContainerButtons>
        <CardTrips>
          <button onClick={applicationToTrip}>Inscrever-se</button>
          {listTrips.map((trip)=>{
            return
            <CardTrips>
              {trip.name}
              {trip.description}
              Planeta:{trip.planet}
              Data:{trip.data}
            </CardTrips>
          })}
        </CardTrips>
      </Box>
    </ContainerHome>
  )
}
*/

export default ListTripsPage

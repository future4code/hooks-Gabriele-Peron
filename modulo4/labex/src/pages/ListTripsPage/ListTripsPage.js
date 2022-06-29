import { useNavigate } from 'react-router-dom'
import { goHome } from '../../router/Coordinator'
import { useRequestData } from '../../hooks/UseRequestData'
import {
  ContainerListTrips,
  ListRender,
  ButtonHome,
  Loading
} from './ListTripsPageStyled'
import { CardTrips } from './CardTrips'

const ListTripsPage = () => {
  const navigate = useNavigate()

  const [listTrips, setListTrips, isLoading] = useRequestData(`/trips`, {})

  const renderedTripsList =
    listTrips.trips &&
    listTrips.trips.map(trip => {
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
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <ListRender>{renderedTripsList}</ListRender>
      )}
      <ButtonHome onClick={() => goHome(navigate)}>home</ButtonHome>
    </ContainerListTrips>
  )
}

export default ListTripsPage

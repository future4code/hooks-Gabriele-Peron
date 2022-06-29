import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { URL } from '../../hooks/Constants'
import { UseProtecdPage } from '../../hooks/UseProtecdPage'
import { useRequestData } from '../../hooks/UseRequestData'

import {
  ContainerAdmin,
  ButtonHome,
  ButtonCreateTrip,
  ButtonLogout,
  Loading,
  ListTrip,
  ContainerListTrips,
  BoxList,
  Delete,
  BoxButtons
} from './AdminHomePageStyled'
import { createTrip, goHome } from '../../router/Coordinator'

const AdminHomePage = () => {
  const navigate = useNavigate()
  UseProtecdPage()
  const [listTrips, setListTrips, isLoading] = useRequestData(`/trips`, {})

  const deleteTrip = (id, name) => {
    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      }
    }

    const confirm = window.confirm(
      `Tem certeza que quer deletar a viagem ${name}?`
    )
    if (confirm) {
      axios
        .delete(`${URL}/trips/${id}`, headers)
        .then(res => {
          alert(`Viagem ${name} deletada com sucesso.`)
          setListTrips()
        })
        .catch(err => {
          alert('Erro ao deletar Viagem.')
        })
    }
  }

  const detailPage = id => {
    navigate(`/login/adminPage/detailPage/trips/${id}`)
  }

  return (
    <ContainerAdmin>
      <ContainerListTrips>
        {isLoading ? (
          <Loading></Loading>
        ) : (
          listTrips.trips &&
          listTrips.trips.map(trip => {
            return (
              <BoxList key={trip.id}>
                <div onClick={() => detailPage(trip.id)}>
                  <ListTrip>{trip.name}</ListTrip>
                </div>
                <Delete onClick={() => deleteTrip(trip.id, trip.name)}>
                  {' '}
                  Deletar{' '}
                </Delete>
              </BoxList>
            )
          })
        )}
      </ContainerListTrips>
      <BoxButtons>
        <ButtonCreateTrip onClick={() => createTrip(navigate)}>
          Criar Nova Viagem
        </ButtonCreateTrip>
        <ButtonHome onClick={() => goHome(navigate)}>Home</ButtonHome>
      </BoxButtons>
    </ContainerAdmin>
  )
}

export default AdminHomePage

import { useNavigate } from 'react-router-dom'
import { goToApplicationFormPage } from '../hooks/Coordinator'
import {
  ContainerCard,
  Img,
  Name,
  Description,
  TripDate,
  TripDurationInDays,
  PerPerson,
  Sign,
  Value,
  Button
} from './CardTripsStyled'

export const CardTrips = props => {
  const navigate = useNavigate()
  

  const valor = Math.floor(Math.random() * 30000) //Calucular valor aleatoriamente

  return (
    <ContainerCard key={props.id}>
      <Img src={`https://picsum.photos/200?random=${props.id}`} />
      <Name> {props.name} </Name>
      <Description>{props.description}</Description>
      <TripDate>Data do lançamento: {props.date}</TripDate>
      <TripDurationInDays>
        Duração da Viagem: {props.durationInDays} dias
      </TripDurationInDays>
      <PerPerson> por pessoa </PerPerson>
      <Sign> R$ </Sign> <Value>{valor},00</Value>
      <Button onClick={()=>goToApplicationFormPage(navigate)}>{'EU QUERO'}</Button>
    </ContainerCard>
  )
}



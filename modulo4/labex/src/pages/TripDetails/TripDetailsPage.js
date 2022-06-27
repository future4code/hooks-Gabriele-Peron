import { useNavigate, useParams } from 'react-router-dom'
import { goBack, goHome } from '../../router/Coordinator'
import { URL } from '../../hooks/Constants'
import axios from 'axios'
import { UseProtecdPage } from '../../hooks/UseProtecdPage'
import { useRequestData } from '../../hooks/UseRequestData'
import {
  ContainerDetails,
  ContainerCardTrip,
  Img,
  Details,
  Loading,
  Name,
  NamePlanet,
  DurationInDays,
  Date,
  ButtonHome,
  ButtonAdmin,
  ContainerButtons,
  ContainerButtonsAproved,
  ButtonsAprovDesapr,
  CardTitle,
  TextCandidates
} from './TripDetailsPagesStyled'

const TripDetailsPage = () => {
  UseProtecdPage()
  const navigate = useNavigate()
  const params = useParams()
  const [detailTrip, setDetailTrip, isLoading] = useRequestData(
    `/trip/${params.id}`,
    []
  )

  const decideCandidate = (candidateId, approve) => {
    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      }
    }

    const body = {
      approve
    }

    axios
      .put(
        `${URL}/trips/${params.id}/candidates/${candidateId}/decide`,
        body,
        headers
      )
      .then(res => {
        alert('Decisão registrada com sucesso')
        setDetailTrip()
      })
      .catch(err => {
        alert('Deu erro')
      })
  }

  const listCandidates =
    detailTrip.trip &&
    detailTrip.trip.candidates.map(candidate => {
      return (
        <div>
          <p>{`Me Chamo ${candidate.name}, tenho ${candidate.age} anos, sou de ${candidate.country} e trabalho como ${candidate.profession}`}</p>
          <p>{`Vocês devem me escolher porque ${candidate.applicationText.toLowerCase()}`}</p>
          <ContainerButtonsAproved>
            <ButtonsAprovDesapr
              onClick={() => decideCandidate(candidate.id, true)}
            >
              Aprovar
            </ButtonsAprovDesapr>
            <ButtonsAprovDesapr
              onClick={() => decideCandidate(candidate.id, false)}
            >
              Reprovar
            </ButtonsAprovDesapr>
          </ContainerButtonsAproved>
        </div>
      )
    })

  const candidatesAproved = detailTrip?.trip?.approved?.map(aprov => {
    return <TextCandidates>{aprov.name}</TextCandidates>
  })

  return (
    <ContainerDetails>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <ContainerCardTrip>
          <Details>Detalhes da Viagem</Details>
          <Img src={'https://picsum.photos/200'} />
          {detailTrip && detailTrip.trip && <Name>{detailTrip.trip.name}</Name>}
          {detailTrip && detailTrip.trip && (
            <NamePlanet>{`Planeta ${detailTrip.trip.planet}`}</NamePlanet>
          )}
          {detailTrip && detailTrip.trip && (
            <DurationInDays>{`A viagem vai durar ${detailTrip.trip.durationInDays} dias`}</DurationInDays>
          )}
          {detailTrip && detailTrip.trip && (
            <Date>{`A data da viagem será dia ${detailTrip.trip.date}`}</Date>
          )}
        </ContainerCardTrip>
      )}
      <ContainerCardTrip>
        <CardTitle>
          <Details>Lista de candidatos</Details>
          {listCandidates && listCandidates.length === 0 ? (
            <TextCandidates>Não há candidatos para esta viagem</TextCandidates>
          ) : (
            listCandidates
          )}
        </CardTitle>
        <div>
          <Details>Candidatos aprovados</Details>
          {candidatesAproved && candidatesAproved.length === 0 ? (
            <TextCandidates>Nenhum candidato aprovado</TextCandidates>
          ) : (
            candidatesAproved
          )}
        </div>
      </ContainerCardTrip>
      <ContainerButtons>
        <ButtonAdmin onClick={() => goBack(navigate)}>Voltar</ButtonAdmin>
        <ButtonHome onClick={() => goHome(navigate)}>Home</ButtonHome>
      </ContainerButtons>
    </ContainerDetails>
  )
}

export default TripDetailsPage

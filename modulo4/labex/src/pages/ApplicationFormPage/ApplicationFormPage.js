import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Countries } from '../../components/Countries'
import { URL } from '../../hooks/Constants'
import { goBack, goHome } from '../../router/Coordinator'
import { useForm } from '../../hooks/useForm'
import { useRequestData } from '../../hooks/UseRequestData'
import {
  ButtonBack,
  ButtonHome,
  ButtonSend,
  ContainerApplication,
  ContainerBoxForm,
  ContainerInput,
  Input,
  Option,
  Select,
  Title
} from './ApplicationFormPageStyled'

const ApplicationFormPage = () => {
  const navigate = useNavigate()
  const { form, onChange, cleanFields } = useForm({
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    contry: ''
  })
  const [trips] = useRequestData('/trips', [])
  const [tripId, setTripId] = useState('')

  const postApplyToTrip = Event => {
    Event.preventDefault()

    axios
      .post(`${URL}/trips/${tripId}/apply`, form)
      .then(res => {
        alert('Incrição enviada com sucesso, BOA SORTE!!!')
      })
      .catch(err => {
        alert(
          'Ops, algo deu errado, por favor revise os dados e tente novamente.'
        )
      })

    cleanFields()
  }

  const onChangeTripId = Event => {
    setTripId(Event.target.value)
  }

  const renderListTrips =
    trips.trips &&
    trips.trips.map(trip => {
      return (
        <Option key={trip.id} value={trip.id}>
          {trip.name}
        </Option>
      )
    })

  return (
    <ContainerApplication>
      <ContainerBoxForm>
        <Title>Candidate-se agora para uma experiência incrível!!!</Title>
        <form onSubmit={postApplyToTrip}>
          <ContainerInput>
            <Select onChange={onChangeTripId}>
              <Option disabled selected>
                Escolha sua Viagem
              </Option>
              {renderListTrips}
            </Select>
          </ContainerInput>
          <ContainerInput>
            <Input
              placeholder="Digite seu nome"
              name={'name'}
              type={'text'}
              value={form.name}
              onChange={onChange}
              required
              minleght={5}
            />
          </ContainerInput>
          <ContainerInput>
            <Input
              placeholder="Digite sua idade"
              name={'age'}
              type={'number'}
              value={form.age}
              onChange={onChange}
              required
              min={18}
            />
          </ContainerInput>
          <ContainerInput>
            <Input
              placeholder="Qual sua Profissão?"
              name={'profession'}
              type={'text'}
              value={form.profession}
              onChange={onChange}
              required
              minLength={5}
            />
          </ContainerInput>
          <ContainerInput>
            <Select
              required
              name={'country'}
              type="text"
              value={form.country}
              onChange={onChange}
            >
              <Countries />
            </Select>
          </ContainerInput>
          <ContainerInput>
            <Input
              placeholder="Porque você deve ser escolhido pra essa viagem?"
              name={'applicationText'}
              type={'text'}
              value={form.applicationText}
              onChange={onChange}
              required
              minLength={25}
            />
          </ContainerInput>
          <ButtonSend type={'submit'}>Enviar</ButtonSend>
        </form>
      </ContainerBoxForm>
      <ButtonBack onClick={() => goBack(navigate)}> Voltar</ButtonBack>
      <ButtonHome onClick={() => goHome(navigate)}>Home</ButtonHome>
    </ContainerApplication>
  )
}

export default ApplicationFormPage

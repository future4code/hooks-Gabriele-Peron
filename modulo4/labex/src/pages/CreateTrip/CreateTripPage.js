import { useNavigate } from 'react-router-dom'
import { planets, URL } from '../../hooks/Constants'
import { goBack, login, goHome } from '../../router/Coordinator'
import { UseProtecdPage } from '../../hooks/UseProtecdPage'
import { useForm } from '../../hooks/useForm'
import axios from 'axios'
import {
  ContainerCreate,
  ContainerBoxForm,
  Option,
  Title,
  ContainerInput,
  Input,
  Buttons,
  Select
} from './CreateTripPageStyled'

const CreateTripPage = () => {
  UseProtecdPage()
  const navigate = useNavigate()
  const { form, onChange, cleanfields } = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: ''
  })

  const logOut = () => {
    localStorage.removeItem('token')
    login(navigate)
  }

  const postCreateTrip = event => {
    event.preventDefault()
    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      }
    }
    axios
      .post(`${URL}/trips`, form, headers)
      .then(res => {
        alert('Viagem criada com sucesso!!')
      })
      .catch(err => {
        alert('Ops, algo deu errado, tente novamente.')
      })

    cleanfields()
  }

  return (
    <ContainerCreate>
      <ContainerBoxForm>
        <Title>Crie sua Viagem</Title>
        <form onSubmit={postCreateTrip}>
          <ContainerInput>
            <Input
              placeholder="Nome da sua Viagem"
              name={'name'}
              value={form.name}
              onChange={onChange}
              required
              minlength={5}
              type={'text'}
            />
          </ContainerInput>
          <ContainerInput>
            <Select
              name={'planet'}
              value={form.planet}
              onChange={onChange}
              required
            >
              <Option value={''} disabled selected>
                Planetas
              </Option>
              {planets.map(planet => {
                return <Option key={planet}>{planet}</Option>
              })}
            </Select>
          </ContainerInput>
          <ContainerInput>
            <Input
              placeholder="Dia da Viagem"
              name={'date'}
              value={form.date}
              onChange={onChange}
              required
              type={'date'}
            />
          </ContainerInput>
          <ContainerInput>
            <Input
              placeholder="Quantos dias vai durar a viagem?"
              name="durationInDays"
              value={form.durationInDays}
              onChange={onChange}
              required
              type={'number'}
              min={50}
            />
          </ContainerInput>
          <ContainerInput>
            <Input
              placeholder="Descreva sua Viagem"
              name="description"
              value={form.description}
              onChange={onChange}
              minlength={30}
              type={'text'}
              required
            />
          </ContainerInput>
          <Buttons type={'submit'}>Criar</Buttons>
        </form>
      </ContainerBoxForm>
      <Buttons onClick={() => goBack(navigate)}>Voltar</Buttons>
      <Buttons onClick={() => goHome(navigate)}>Home</Buttons>
    </ContainerCreate>
  )
}

export default CreateTripPage

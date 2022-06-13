import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants'
import {
  Age,
  Biography,
  ButtonHeart,
  BtnSeeMatches,
  DivButtons,
  DivCard,
  DivContainer,
  Nam,
  ButtonHearte,
  Photo,
  ButtonX,
  Name
} from './MainScreenStyled'

const MainScreen = props => {
  const [profile, setProfile] = useState([])

  const getProfile = () => {
    axios
      .get(`${BASE_URL}/person`)
      .then(res => setProfile(res.data.profile))
      .catch(err => console.log(err))
  }

  useEffect(() => getProfile(), [])

  const choosePerson = () => {
    const body = {
      id: profile.id,
      choice: true
    }

    axios
      .post(`${BASE_URL}/choose-person`, body)
      .then(res => getProfile())
      .catch(err => console.log(err))
  }

  const noChoosePerson = () => {
    const body = {
      id: profile.id,
      choice: true
    }

    axios
      .post(`${BASE_URL}/choose-person`, body)
      .then(res => getProfile())
      .catch(err => console.log(err))
  }

  return (
    <DivContainer>
      <DivCard>
        <Photo src={profile.photo} />
        <Name>{profile.name}</Name>
        <Age>{profile.age}</Age>
        <Biography>{profile.bio}</Biography>
      </DivCard>
      <DivButtons>
        <ButtonHeart onClick={choosePerson}>&#10084;</ButtonHeart>
        <ButtonX onClick={noChoosePerson}>X</ButtonX>

        <BtnSeeMatches onClick={props.onChangeMatchScreen}>
          Ver Matches
        </BtnSeeMatches>
      </DivButtons>
    </DivContainer>
  )
}

export default MainScreen

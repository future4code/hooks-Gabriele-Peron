import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants'
import {
  DivContainer,
  DivMatch,
  Photo,
  MatchName,
  MatchAge,
  BtnBack
} from './MatchScreenStyled'

const MatchScreen = props => {
  const [matchesList, setMatchesList] = useState([])

  const getMatches = () => {
    axios
      .get(`${BASE_URL}/matches`)
      .then(res => setMatchesList(res.data.matches))
      .catch(err => console.log(err))
  }

  useEffect(() => getMatches(), [])

  return (
    <div>
      {matchesList.map(match => {
        return (
          <DivContainer>
            <DivMatch>
              <Photo src={match.photo} />
              <MatchName>{match.name}</MatchName>
              <MatchAge>{match.age}</MatchAge>
            </DivMatch>
          </DivContainer>
        )
      })}
      <BtnBack onClick={props.onChangeMainScreen}>Voltar</BtnBack>
    </div>
  )
}

export default MatchScreen

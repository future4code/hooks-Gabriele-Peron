import styled from 'styled-components'

export const DivContainer = styled.div`
  margin: 0 auto;
  padding: 5vh 1vh;
  width: 30vw;
  background-color: #fff;
  border: 2px solid;
  @media screen and (max-width: 375px) {
    width: 300px;
  }
`

export const DivCard = styled.div`
  text-align: center;
`

export const Photo = styled.img`
  max-width: 300px;
  max-height: 200px;
  z-index: 2;
  border-radius: 10px;
`

export const Name = styled.p`
  margin: 1vh 0 0;
  font-size: 1.5rem;
  font-family: 'Dosis', sans-serif;
  font-weight: 900;
  color: Black;
  @media screen and (max-width: 375px) {
    font-size: 24px;
  }
`
export const Age = styled.p`
  margin: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #4f4f4f;
`

export const Biography = styled.p`
  margin: 2vh auto;
  font-size: 0.7rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 900;
  @media screen and (max-width: 375px) {
    font-size: 20px;
  }
`

export const DivButtons = styled.div`
  text-align: center;
  margin: 0 auto;
  font-size: 1rem;
  text-align: center;
  justify-content: center;
`
export const ButtonX = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 50px;
  color: red;
  transform: scale(0.7);
  transition: all 0.2s ease 0s;
  position: relative;
  box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
  overflow: hidden;
  border: 1px solid red;
  margin-left: 58px;
  &:hover {
    background-color: red;
    color: white;
    border: 1px solid red;
  }
`

export const ButtonHeart = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 50px;
  color: green;
  transform: scale(0.7);
  transition: all 0.2s ease 0s;
  position: relative;
  box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
  overflow: hidden;
  border: 1px solid green;
  margin-left: 122px;
  &:hover {
    background-color: green;
    color: white;
    border: 1px solid green;
  }
`

export const BtnSeeMatches = styled.button`
  border-radius: 30px;
  background-color: #40e0d0;
  border: solid 1px;
  border-color: #40e0d0;
  width: 35%;
  height: 50%;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  &:hover {
    background-color: purple;
    color: white;
    border: 1px solid purple;
  }
`

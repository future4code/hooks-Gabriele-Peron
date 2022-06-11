import styled from 'styled-components'

export const DivContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #a1887f;
  &:hover {
    box-shadow: 1px 1px purple, 2px 2px purple, 3px 3px purple;
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
  }
`

export const DivMatch = styled.div`
  display: flex;
  margin: 0 auto;
`

export const Photo = styled.img`
  width: 40px;
  height: 40px;
`

export const MatchName = styled.p`
  margin: auto 1vh;
`

export const MatchAge = styled.p`
  color: gray;
`

export const BtnBack = styled.button`
  border-radius: 30px;
  position: fixed;
  background-color: purple;
  border: solid 1px;
  border-color: purple;
  width: 20%;
  height: 5%;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  &:hover {
    background-color: #40e0d0;
    color: white;
    border: 1px solid #40e0d0;
  }
`

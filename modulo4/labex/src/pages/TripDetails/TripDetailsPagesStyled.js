import styled from "styled-components"
import Background from '../../img/back2.gif'





export const ContainerDetails = styled.div`
  display: flex;
  justify-content: space-around ;
  width:100vw;
  height:100vh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size:cover;
  color: #fff;
`

export const ContainerCardTrip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  width: 700px;
  height: 600px;
  background: rgba(0, 0, 0, 1);
  border-radius: 20px;
  margin-top: 20px;
  box-shadow: -10px -10px 20px rgba(0, 0, 0, 0.3);
`

export const Img = styled.img`
  margin: 0 25px;
  width: 300px;
  border-radius: 15px;
`

export const Details = styled.h1`
  color: #39d0e8;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 6px;
  margin: 30px 0;
  text-align: center;
`


export const Name = styled.h2`
  color: #39d0e8;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 6px;
`

export const NamePlanet = styled.h4`
  color: #39d0e8;
  margin-top: -10px ;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 6px;
`

export const DurationInDays = styled.h4`
  color: #fff;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 6px;
  
`

export const Date = styled.h4`
  color: #fff;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2px;
  
`

export const Loading = styled.h1`
  left: 0;
  right: 0;
  margin: 50% auto;
  animation: is-rotating 1s infinite;
  border: 6px solid #39d0e8;
  border-radius: 50%;
  border-top-color: #fff;
  height: 50px;
  width: 50px;
  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`

export const ButtonHome = styled.button`
  padding: 10px 20px;
  color: #39d0e8;
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 5px;
  :hover {
    background: #39d0e8;
    color: white;
    border-radius: 5px;
    box-shadow: 0 0 5px;
  }
`


export const ButtonAdmin = styled.button`
  padding: 10px 20px;
  color: #39d0e8;
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 5px;
  :hover {
    background: #39d0e8;
    color: white;
    border-radius: 5px;
    box-shadow: 0 0 5px;
  }
`



export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px ;
`

export const ContainerButtonsAproved = styled.div`
display: flex;
justify-content: space-around;
`

export const ButtonsAprovDesapr = styled.button`
  padding: 10px 20px;
  color: #39d0e8;
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 5px;
  :hover {
    background: #39d0e8;
    color: white;
    border-radius: 5px;
    box-shadow: 0 0 5px;
  }
    
`

export const CardTitle = styled.div`
display: flex;
flex-direction: column;
`

export const TextCandidates = styled.p`
  color: #fff;
  font-size: 20px;
  margin: 30px 0;
  text-align: center;
`
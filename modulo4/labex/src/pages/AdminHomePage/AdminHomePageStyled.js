import styled from 'styled-components'
import Background from '../../img/back2.gif'

export const ContainerAdmin = styled.div`
  position: absolute;
  display: flex;
  align-items: start;
  justify-content: end;
  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
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

export const ListTrip = styled.button`
  background-color: transparent;
  border: none;
  color: #39d0e8;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 4px;
  overflow: hidden;
  transition: 0.5s;
  padding: 10px 20px;
  :hover {
    background: #39d0e8;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #39d0e8, 0 0 25px #39d0e8, 0 0 50px #39d0e8,
      0 0 100px #39d0e8;
  }
`

export const ContainerListTrips = styled.div`
  margin-top: 150px;
  margin-right: 400px;
  margin-left: 30px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  background: rgba(0, 0, 0, 0.8);
  padding: 30px;
  max-height: 50vh;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 4px;
    background: black;
  }
  ::-webkit-scrollbar-thumb {
    width: 4px;
    background: #39d0e8;
  }
`

export const Delete = styled.div`
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

export const BoxList = styled.div`
  display: flex;
  align-items: center;

  overflow: auto;
  ::-webkit-scrollbar {
    width: 6px;
    background: black;
    border: solid 0.5px #39d0e8;
  }
  ::-webkit-scrollbar-thumb {
    width: 6px;
    background: #39d0e8;
  }
  ::-webkit-scrollbar-button {
    width: 6px;
    background: #39d0e8;
  }
`

export const ButtonCreateTrip = styled.button`
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

export const ButtonDetailsTrip = styled.button`
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

export const BoxButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-right: 20px;
`

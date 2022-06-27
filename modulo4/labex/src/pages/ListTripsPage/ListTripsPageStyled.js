import styled from 'styled-components'
import Background from '../../img/back2.gif'

export const ContainerListTrips = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
`

export const ListRender = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
  height: 500px;
  padding-bottom: 60px;
  ::-webkit-scrollbar {
    height: 4px;
    background: black;
  }
  ::-webkit-scrollbar-thumb {
    height: 4px;
    background: #39d0e8;
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

export const ButtonHome = styled.button`
  padding: 10px 20px;
  color: #39d0e8;
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 5px;
  :hover {
    background: #39d0e8;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px;
  }
`

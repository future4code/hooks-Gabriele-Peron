import styled from 'styled-components'
import Background from '../../img/back2.gif'

export const ContainerHome = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
`

export const Logo = styled.img`
  position: absolute;
  width: 400px;
  margin-top: 40px;
  margin-left: 60px;
 
`

export const ContainerButtons = styled.div`
  display: flex;
  width: 400px;
  margin-top: 60px;
  justify-content: space-around;
  margin-left: 1000px;
`

export const Buttons = styled.div`
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

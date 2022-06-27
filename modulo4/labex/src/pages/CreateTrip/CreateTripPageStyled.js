import styled from 'styled-components'
import Background from '../../img/back2.gif'

export const ContainerCreate = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
`

export const ContainerBoxForm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`

export const Option = styled.option`
  color: #39d0e8;
  background-color: black;
`

export const Title = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
  font-family: sans-serif;
`

export const ContainerInput = styled.div`
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #39d0e8;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  font-family: sans-serif;
  :focus-within {
    top: -20px;
    left: 0;
    color: #39d0e8;
    font-size: 12px;
  }
  :valid {
    top: -20px;
    left: 0;
    color: #39d0e8;
    font-size: 12px;
  }
`

export const Buttons = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #39d0e8;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
  :hover {
    background: #39d0e8;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px;
  }
`

export const Select = styled.select`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #39d0e8;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  font-family: sans-serif;
  :focus-within {
    top: -20px;
    left: 0;
    color: #39d0e8;
    font-size: 12px;
  }
  :valid {
    top: -20px;
    left: 0;
    color: #39d0e8;
    font-size: 12px;
  }
`

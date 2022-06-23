import styled from 'styled-components'

export const LoginBox = styled.div`
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

  .user-box h1 {
    margin: 0 0 30px;
    padding: 0;
    color: #39d0e8;
    text-align: center;
  }

  .user-box {
    position: relative;
  }

  .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;

    ::placeholder{
      color: #fff;
    }
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }
`

export const Button = styled.button`
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

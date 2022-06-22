import styled from "styled-components";


export const Container = styled.div`
 display: flex;
  width: 100%;
  height: 100vh;
`

export const Box = styled.div`
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
    background:  #39d0e8;
  }
`
export const ContainerButtons = styled.button`
margin-top: -500px;
  padding: 10px 20px;
  transition: 0.5s;
  height: 70px;
  background-color: transparent;
  border: none;
  :hover {
    background: #ff0043;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #ff0043, 0 0 25px #ff0043, 0 0 50px #ff0043,
      0 0 100px #ff0043;
  }
`
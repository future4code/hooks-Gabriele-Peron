import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={"paulinha"}
          fotoUsuario={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150"}
        />

        <Post
          nomeUsuario={"pedrinho"}
          fotoUsuario={"https://picsum.photos/50/70"}
          fotoPost={"https://picsum.photos/200/130"}
        />

        <Post
          nomeUsuario={"joão"}
          fotoUsuario={"https://picsum.photos/50/60"}
          fotoPost={"https://picsum.photos/200/140"}
        />
      </MainContainer>
    );
  }
}

export default App;

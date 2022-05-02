import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

 const MainContanier = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center
   `


class App extends React.Component {
  state={
    usuario:[
      {
        nomeUsuario:'paulinha',
        fotoUsuario:<img src='https://picsum.photos/50/50'></img>,
        fotoPost:<img src='https://picsum.photos/200/150'></img>
      },
      {
        nomeUsuario:'Pedro',
        fotoUsuario:<img src='https://picsum.photos/50/60'></img>,
        fotoPost:<img src='https://picsum.photos/200/143'></img>
      },
      {
        nomeUsuario:'joão',
        fotoUsuario:<img src='https://picsum.photos/50/80'></img>,
        fotoPost:<img src='https://picsum.photos/200/140'></img>
      }
    ]
  }
render() {
  const listaComponentes = this.state.usuario.map((usuario) =>{
    return(
      <p>
        {usuario.nomeUsuario} - {usuario.fotoUsuario} - {usuario.fotoPost}
      </p>
    )
  })

  return(
    <MainContanier>
    {listaComponentes}
    </MainContanier>
  )
}
}
export default App;
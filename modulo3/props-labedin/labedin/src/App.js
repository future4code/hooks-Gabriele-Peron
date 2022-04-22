import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import eu from "./img/eu.jpg"

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={eu}
          nome="Gabriele Peron" 
          descricao="Oi, eu sou estudante de WebFullStack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://png.pngtree.com/png-clipart/20190705/original/pngtree-down-direction-arrow-icon-png-image_4243690.jpg" 
          texto="Ver mais"
        />

        <CardPequeno
        imagem="https://png.pngtree.com/png-clipart/20201208/original/pngtree-email-icon-design-png-image_5571212.jpg"
        texto="Email: teste@react.com"
        />

        <CardPequeno
        imagem="https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-location-icon-png-image_3787762.jpg"
        texto="Endereço: Rua das Oliveiras"
        />


      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://png.pngtree.com/png-clipart/20210704/original/pngtree-the-astronaut-with-flower-flag-on-moon-png-image_6483260.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

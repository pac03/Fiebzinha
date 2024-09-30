import { useState } from 'react';
import './achados.css';

import caderno from '../../imagens/img_produtos/Achados/caderno.png'
import garrafa from '../../imagens/img_produtos/Achados/garrafa.png'
import guarda from '../imagens/img_produtos/Achados/guarda.png'



export default function Materiais() {
    
  
  return (
    <>


<link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

<div>

<section className="dishes" id="dishes">
<h1 className="heading"><span>Doces</span></h1>

<div className="box-container">

    <div className="box">
        < img src={caderno} alt="img1" />
        <h3>Caderno achado na sala 33</h3>
      
        <a href="#" className="btn">Retirar</a>
    </div>

    

    <div className="box">
        < img src={garrafa} alt="img1" />
        <h3>Garrafa azul achado no 4 andar lab 2</h3>
       
        <a href="#" className="btn">Retirar</a>
    </div>


<div className="box">
    < img src={guarda} alt="img1" />
    <h3>Guarda-Chuva achado na sala 3</h3>
   
    <a href="#" className="btn">Retirar</a>

</div>


    </div>
    </section>

</div>
    </>
  );
}
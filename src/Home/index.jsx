import { Link } from 'react-router-dom'
import car from '../imagens/img/carrinho.png'
import uniform from '../imagens/img/uniform.png'
import sumiu from '../imagens/img/sumiu.png'
import comida from '../imagens/img/comida.png'
import material from '../imagens/img/material.png' 
import img1 from '../imagens/img/img1.png'
import './home.css'


export default function Home(){

    return(
        <div className='divpai'>
            
        <section className="home" id="home">
          <div className="image">
          <img src={img1} alt="img1" />
          </div>
 
          <div className="content">
            <h3>Olá, Alunos! </h3>
            <p>Bem-vindos à Fieb Store, onde sua experiência educacional é aprimorada
              <br />Estamos abertos durante todo o período escolar, incluindo os momentos de entrada e intervalo. Visite-nos e aproveite nossos serviços sempre que precisar!
            </p>
           
          </div>
        </section>
 
        <section className="categorias" id="categorias">
          <h1 className="heading"><span>Categorias</span></h1>
 
          <div className="box-container">
            <div className="box">
            <img src={comida} alt="comida" />
              <h3>Delícias</h3>
              <p>Venha desfrutar de uma experiência deliciosa durante o intervalo escolar!</p>
 
             <a  className="btn"><Link to='/login'>Eu Quero!</Link></a>
            </div>
 
            <div className="box">
            <img src={material} alt="material" />
              <h3>Materiais</h3>
              <p>Tenha todos os materiais escolares essenciais sempre à mão!</p>
 
              <a  className="btn"><Link to='/login'>Eu Quero!</Link></a>
            </div>
 
            <div className="box">
            <img src={uniform} alt="uniform" />
              <h3>Uniformes</h3>
              <p>Uniformes da FIEB com preço único e qualidade garantida para todos!</p>
 
              <a className="btn"><Link to='/login'>Eu Quero!</Link></a>
            </div>
 
            <div className="box">
            <img src={sumiu} alt="sumiu" />
              <h3>Achados e Perdidos</h3>
              <p>Recupere itens perdidos; veja nossa lista de objetos encontrados!</p>
 
              <a  className="btn"><Link to='/login'>Encontrar</Link></a>
            </div>
          </div>
        </section>
 
        <section className="compra" id="compra">
          <h1 className="heading"><span>Meu</span> Carrinho</h1>
 
          <div className="row">
            <div className="image">
            <img src={car} alt="carrinho" />
            </div>
            <div className="content">
              <p>Venha dar uma espiada e descubra o que está ansioso para ser adquirido. Seja para uma necessidade do dia a dia ou um mimo especial, nosso carrinho está repleto de opções que vão te surpreender e encantar!</p>
             
              <a  className="btn"><Link to='/login'>Ver</Link></a>
            </div>
          </div>
        </section>
        </div>
    )
}
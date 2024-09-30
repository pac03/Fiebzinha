import { useState } from 'react'
import {Link} from "react-router-dom"
import './login.css'
import api from "../service/api";
import test from '../imagens/img/login.png'


const login = () => {

   

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
  
    const handleSubmit = async () =>{
      try{
       
       const response = await api.post("users/aluno", {email: email, senha: senha, tipoUsuario: "Aluno"})
          console.log (response.data)
      } catch(error){
        console.log(error)
      }
    }
  return (
    <>

<link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

    <div className='paiLogin'>
        <div className="l-form">

            <div className="form">
            <img src={test} alt="Mascote" className='imglogin'/>

                <form action="" className="form__content">
                    <h1 className="form__title">Bem-Vindo!</h1>

                    <div className="form__div form__div-one">
                        <div className="form__icon">
                            <i className='bx bx-user-circle'></i>
                        </div>

                        <div className="form__div-input">
                            <input type="email" className="form__input" placeholder="RM" required onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>

                    <div className="form__div">
                        <div className="form__icon">
                            <i className='bx bx-lock' ></i>
                        </div>

                        <div className="form__div-input">
                            <input type="password" className="form__input"placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required />
                        </div>
                    </div>
                    <Link className="form__forgot" to='/cadastro'>Cadastra-se</Link>

                    <button className="form__button" value="Entrar" onClick={handleSubmit} >Entrar</button>

                   
                </form>
            </div>
        </div>
        </div>

    </>
  )
}

export default login
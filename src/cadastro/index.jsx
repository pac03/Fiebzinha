import { useState } from 'react'
import {Link} from "react-router-dom"
import './cadastro.css'
import api from "../service/api"
import register from'../imagens/img/register.png'


const cadastro = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
  
    const handleSubmit = async () =>{
      try{
       
       const response = await api.post("users/cliente", {email: email, senha: senha, tipoUsuario: "Cliente"})
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

    <div className='paicadastro'>
    <div className="boxcadastro">
        <div className="img-box">
        <img src={register} alt="regist" />
        </div>

        <div className="form-box">
            <h2>Criar Conta do Aluno</h2>
            <p> Já é cadastrado? <Link to='/login'> Entrar </Link> </p>
            <form action="#">

                <div className="input-group">
                    <label for="email">RM</label>
                    <input type="email" id="email" placeholder="Digite o seu RM completo"  onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div class="input-group">
                    <label for="telefone">Senha</label>
                    <input type="password" id="senha" placeholder="Digite o sua senha" onChange={(e) => setSenha(e.target.value)} required />
                </div>

                <div className="input-group w50">
                    <label for="Confirmarsenha">Confirmar Senha</label>
                    <input type="password" id="Confirmarsenha" placeholder="Confirme a senha" required />
                </div>

                <div className="input-group">
                    <button onClick={handleSubmit}>Cadastrar</button>
                </div>

            </form>
        </div>
  

        
</div>

</div>
    </>
  )
}

export default cadastro
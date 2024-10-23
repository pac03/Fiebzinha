// import React, { useState } from 'react'
// import { login } from '../service/authService'
// import test from '../imagens/img/login.png'
// import { useNavigate } from 'react-router-dom'
// import { jwtDecode } from 'jwt-decode'


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = await login(email, senha);

//       localStorage.setItem('token', token)

//       const decodedToken = jwtDecode(token);
//       console.log('Token Decodificado:', decodedToken)
//       const { roles } = decodedToken;

//       console.log('roles:', roles);

//       if (roles == 'ROLE_FUNCIONARIO') {
//         navigate('/crud');
//       } else if (roles == 'ROLE_CLIENTE') {
//         navigate('/home');
//       } else {
//         setError('Tipo de usuário desconhecido.');
//       }
//     } catch (error) {
//       console.error('Erro no login:', error);
//       setError('Falha no login. Verifique suas credenciais.');
//     }
//   };

//   return (
//     <>

// <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"></link>
//       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
//     <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

//     <div className='paiLogin'>
//         <div className="l-form">

//             <div className="form">
//             <img src={test} alt="Mascote" className='imglogin'/>

//                 {error && <p>{error}</p>}
//                 <form action="" className="form__content" onSubmit={handleSubmit}>
//                     <h1 className="form__title">Bem-Vindo!</h1>

//                     <div className="form__div form__div-one">
//                         <div className="form__icon">
//                             <i className='bx bx-user-circle'></i>
//                         </div>

//                         <div className="form__div-input">
//                             <input type="email" className="form__input" placeholder="RM" value={email} onChange={(e) => setEmail(e.target.value)} required/>
//                         </div>
//                     </div>

//                     <div className="form__div">
//                         <div className="form__icon">
//                             <i className='bx bx-lock' ></i>
//                         </div>

//                         <div className="form__div-input">
//                             <input type="password" className="form__input"placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
//                         </div>
//                     </div>
//                     <Link className="form__forgot" to='/cadastro'>Cadastra-se</Link>

//                     <button className="form__button" value="Entrar">Entrar</button>

//                 </form>
//             </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Login


import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { login } from '../service/authService'
import './login.css'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import test from '../imagens/img/login.png'


const Login = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = await login(email, senha)

      localStorage.setItem('token', token)

      const decodedToken = jwtDecode(token)
      console.log('Token Decodificado:', decodedToken)
      const { roles } = decodedToken

      console.log('roles:', roles)

      if (roles == 'ROLE_FUNCIONARIO') {
        navigate('/carrinho')
      } else if (roles == 'ROLE_CLIENTE') {
        navigate('/carrinho')
      } else {
        setError('Tipo de usuário desconhecido.')
      }
    } catch (error) {
      console.error('Erro no login:', error)
      setError('Falha no login. Verifique suas credenciais.')
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
  
                  <form action="" className="form__content" onSubmit={handleSubmit}>
                      <h1 className="form__title">Bem-Vindo!</h1>
  
                      <div className="form__div form__div-one">
                          <div className="form__icon">
                              <i className='bx bx-user-circle'></i>
                          </div>
  
                          <div className="form__div-input">
                              <input type="email" className="form__input" placeholder="RM" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                          </div>
                      </div>
  
                      <div className="form__div">
                          <div className="form__icon">
                              <i className='bx bx-lock' ></i>
                          </div>
  
                          <div className="form__div-input">
                              <input type="password" className="form__input"placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                          </div>
                      </div>
                      <Link className="form__forgot" to='/cadastro'>Cadastra-se</Link>

                      {error && <p className='alert_error'>{error}</p>}
                      <button className="form__button" value="Entrar">Entrar</button>
  
                  </form>
              </div>
          </div>
        </div>
      </>
    )
  }

  
export default Login;
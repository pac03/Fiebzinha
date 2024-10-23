// // npm install react-hook-form
// import  {useForm} from "react-hook-form";
// import { Link } from 'react-router-dom';

// import { useState } from "react";
// import api from "./service/api";
// import './crud.css'

// const Produto = () => {

// const[vnome, setNome] = useState('')
// const[vdescricao, setDescricao] = useState('')
// const[vpreco, setPreco] = useState('')
// const[vqtd, setQtd] = useState('')


// const handleSubmit = async () =>{
// try{
//     const response = await api.post('funcionario',{nome: vnome, descricao: vdescricao, preco: vpreco, quantidade: vqtd})
//     console.log(response.data)
//   }catch (error){
// console.log(error)
// }
// }

//   return (
//     <div className="app-container">
//       <div className="form-group">
//         <label>Nome  {vnome}</label>
//         <input type="text" placeholder="Informe o Nome do Produto"  onChange={(e) => setNome(e.target.value)} /> 
//       </div>

//       <div className="form-group">
//         <label>Descrição  {vdescricao}</label>
//         <input type="text" placeholder="Informe a Descrição do Produto"  onChange={(e) => setDescricao(e.target.value)} /> 
//       </div>

//       <div className="form-group">
//         <label>Preço {vpreco} </label>
//         <input type="text" placeholder="Informe o Preco do Produto"  onChange={(e) => setPreco(e.target.value)} /> 
//   </div>

//   <div className="form-group">
//         <label>Quantidade {vqtd}</label>
//         <input type="text" placeholder="Informe a Qtd Produto"  onChange={(e) => setQtd(e.target.value)} /> 
//   </div>

//       <div className="form-group">
            
//             <button onClick={handleSubmit}>Cadastrar</button>
//       </div>

//     </div>
//   )





// }




// export default Produto;




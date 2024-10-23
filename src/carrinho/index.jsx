// import React, { useEffect, useState } from "react"
// import api from "../service/api"
// import './carrinho.css'


// export default function Carrinho() {    
//     const [content, setContent] = useState(<ProdutoList showForm={showForm} />);

//     function showList() {
//         setContent(<ProdutoList showForm={showForm} />);
//     }

//     function showForm(produto) {
//         setContent(<ProdutoForm produto={produto} showList={showList} />);
//     }

//     return (
            
//         <div className="container my-5">
//             {content}
//         </div>
//     );
// }

// function ProdutoList(props) {
//     const [produto, setProduto] = useState([]);

//     function fetchProduto() {
//         fetch("http://localhost:8080/academico/api/v1/cliente/carrinho-produto", {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 console.error("Response Status: ", response.status);
//                 throw new Error(`Unexpected Server Response: ${response.statusText}`);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             //console.log(data);
//             setProduto(data);
//         })
//         .catch((error) => console.error("Error: ", error));
//     }
    

//     useEffect(() => fetchProduto(), []);

//     function deleteProduto(id) {
//         fetch('http://localhost:8080/{id}/remover-produto/' + id, {
//             method: 'DELETE'
//         })
//         .then((response) => response.json())
//         .then((data) => fetchProduto());
//     }


//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       api.get('produto')
//         .then(response => {
//           console.log(response); // Verifique a resposta completa
//           setData(response.data.data || []);
//           setLoading(false);
//         })
//         .catch(error => {
//           console.error(error);
//           setError(error.message);
//           setLoading(false);
//         });
//     }, []);
  
//     if (loading) return <div className="loading">Carregando...</div>;
//     if (error) return <div className="error">Erro: {error}</div>;
  
//         return (
//             <div className="container">
//                 <h1>Carrinho</h1>
//                 {data.length > 0 ?
//                     <ul className="data-list" style={{ marginTop: '600px' }}>
//                         {data.map((item) => (
//                             <li key={item.id} className="data-item">
//                                 <span>{produto.qntd}</span>
//                                 <td style={{width: "10px", whiteSpace: "nowrap"}}>
//                                     <button onClick={() => props.showForm(produto)} type="button" className="btn btn-primary btn-sm me-2">Editar</button>
//                                     <button onClick={() => deleteProduto(produto.id)} type="button" className="btn btn-danger btn-sm">Deletar</button>
//                                 </td>
//                             </li>
//                         ))}
//                     </ul> : <p>Dados indisponíveis</p>}
//             </div>

//             /*    <>
//                 <h2 className="text-center mb-3"> Lista de Produtos</h2>
//                 <button onClick={() => props.showForm({})} type="button" className="btn btn-primary me-2">Criar</button>
//                 <button onClick={() => fetchProduto()} type="button" className="btn btn-outline-primary me-2">Atualizar</button>

//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Quantidade</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         produto.map((produto, index) => {
//                             return (
//                                 <tr key={index}>

//                                 <td>{produto.qntd}</td>
    
//                                 <td style={{width: "10px", whiteSpace: "nowrap"}}>
//                                     <button onClick={() => props.showForm(produto)} type="button" className="btn btn-primary btn-sm me-2">Editar</button>
//                                     <button onClick={() => deleteProduto(produto.id)} type="button" className="btn btn-danger btn-sm">Deletar</button>
//                                 </td>
                            

//                                 </tr>
//                             );
//                         })
//                     }
//                 </tbody>
//             </table>
//                 </>*/
//         )
// }


// function ProdutoForm(props) {
//     const [errorMessage, setErrorMessage] = useState("");

//     function handleSubmit(event) {
//         event.preventDefault();

//         //read form data
//         const formData = new FormData(event.target);

//         // convert formData to object
//         const produto = Object.fromEntries(formData.entries());

//         // form validation
//         if (!produto.name || !produto.qntd || !produto.category || !produto.price) {
//             console.log("Please provide all the required fields!");
//                 setErrorMessage(
//                     <div class="alert alert-warning" role="alert">
//                         Please provide all the required fields!
//                         </div>
//                 )
//             return;
//         }
        

//         if(props.produto.id) {
            
//             //update the produto

//             fetch("http://localhost:8080/carrinho-compras/" + props.produto.id, {
//                 method: "PATCH",
//                 headers: {
//                       "Content-Type": "application/json",
//                },
//                body:JSON.stringify(produto)
//             })
//             .then((response) => {
//                    if (!response.ok) {
//                       throw new Error("Network response was not OK");
//                 }
//                 return response.json()
//            })
//                 .then((data) => props.showList())
//                 .catch((error) => {
//                   console.error("Error:", error);
//              });
//         }
//         else {

        
//             // create a new produto
//             produto.creatAt = new Date().toISOString().slice(0,10);
//             fetch("http://localhost:8080/carrinho-compras/", {
//               method: "POST",
//               headers: {
//                     "Content-Type": "application/json",
//              },
//              body: JSON.stringify(produto)
//           })
//           .then((response) => {
//                  if (!response.ok) {
//                     throw new Error("Network response was not OK");
//               }
//               return response.json()
//          })
//               .then((data) => props.showList())
//               .catch((error) => {
//                 console.error("Error:", error);
//            });
//         }
//     }
//     return(
//         <>
//         <h2 className="text-center mb-3"> {props.produto.id ? "Editar Produto" : "Criar um Novo Produto"}</h2>

//         <div className="row">
//             <div className="col-lg-6 mx-auto">

//                 {errorMessage}

//                 <form onSubmit={(event) => handleSubmit(event)}>
//                     {props.produto.id && <div className="row mb-3">
//                         <label className="col-sm-4 col-form-label">ID</label>
//                         <div className="col-sm-8">
//                             <input readOnly className="form-control-plaintext"
//                             name="id"
//                             defaultValue={props.produto.id} />
//                         </div>
//                     </div>}


//                      <div className="row mb-3">
//                         <label className="col-sm-4 col-form-label">Nome</label>
//                         <div className="col-sm-8">
//                             <input className="form-control"
//                             name="name"
//                             defaultValue={props.produto.name} />
//                         </div>
//                     </div>


//                     <div className="row mb-3">
//                         <label className="col-sm-4 col-form-label">Quantidade</label>
//                         <div className="col-sm-8">
//                             <input className="form-control"
//                             name="qntd"
//                             defaultValue= {props.produto.qntd} />
//                         </div>
//                     </div>

//                     <div className="row mb-3">
//                         <label className="col-sm-4 col-form-label">Price</label>
//                         <div className="col-sm-8">
//                             <input className="form-control"
//                             name="price"
//                             defaultValue={props.produto.price} />
//                         </div>
//                     </div>

//                     <div className="row">
//                         <div className="offset-sm-4 col-sm-4 d-grid">
//                             <button type="submit" className="btn btn-primary btn-sm me-3">Salvar</button>
//                         </div>
//                             <div className="col-sm-4 d-grid">
//                                  <button onClick={() => props.showList()} type="button" className="btn btn-secondary me-2">Cancelar</button>

//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//         </>
//     );
// }

import React, { useEffect, useState } from "react";
import api from "../service/api";
import './carrinho.css';

export default function Carrinho() {    
    const [content, setContent] = useState(null);

    useEffect(() => {
        const clienteId = 13; // Substitua pelo ID do cliente que você deseja carregar
        showList(clienteId); // Passa o ID do cliente para a função
    }, []);

    function showList(id) {
        setContent(<ProdutoList clienteId={id} showForm={showForm} />);
    }

    function showForm(produto) {
        setContent(<ProdutoForm produto={produto} showList={showList} />);
    }

    return (
        <div className="container my-5">
            {content}
        </div>
    );
}

function ProdutoList({ clienteId, showForm }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProdutos(clienteId); // Passa o ID do cliente para buscar os produtos
    }, [clienteId]);

    async function fetchProdutos(id) {
        try {
            const response = await api.get(`cliente/${id}/carrinho`); // Corrigido para usar template strings
            setData(response.data.data || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    async function deleteProduto(id) {
        try {
            await api.delete(`produto/${id}`); // Usando a instância do api
            fetchProdutos(clienteId); // Atualiza a lista após a deleção
        } catch (err) {
            console.error("Error:", err);
            alert("Erro ao deletar o produto."); // Notifica o usuário
        }
    }

    if (loading) return <div className="loading">Carregando...</div>;
    if (error) return <div className="error">Erro: {error}</div>;

    return (
        <div className="container">
            <h1>Carrinho</h1>
            {data.length > 0 ? (
                <ul className="data-list">
                    {data.map(item => (
                        <li key={item.id} className="data-item">
                            <span>{item.qntd}</span>
                            <button onClick={() => showForm(item)} type="button" className="btn btn-primary btn-sm me-2">Editar</button>
                            <button onClick={() => deleteProduto(item.id)} type="button" className="btn btn-danger btn-sm">Deletar</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Dados indisponíveis</p>
            )}
        </div>
    );
}
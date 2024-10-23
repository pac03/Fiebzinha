  import React, { useState, useEffect } from "react";
import './crud.css'; // Adicione seus estilos aqui
import api from "../service/api";

const DataList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('users')
      .then(response => {
        console.log(response); // Verifique a resposta completa
        setData(response.data.data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">Erro: {error}</div>;

  return (
    <div className="container">
      <h1>Crud</h1>
      {Array.isArray(data) && data.length > 0 ? (
        <ul className="data-list">
          {data.map(item => (
            <li key={item.id} className="data-item">
              <span>{item.id}- {item.email} </span>
              <button onClick={() => alert(`Atualizar item ${item.id}`)}>Atualizar</button>
              <button onClick={() => deleteProduto(item.id)} type="button" className="btn btn-danger btn-sm">Deletar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Dados indisponíveis</p>
      )}
    </div>
  );
};

export default DataList;

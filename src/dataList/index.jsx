import React, { useState, useEffect } from "react";
import './datalist.css' // Adicione seus estilos aqui
import api from "../service/api"
import { useNavigate } from 'react-router-dom'

const DataList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleBuscar = async () => {
        try {
            const response = await api.get('users')

            setData(response.data);
            setLoading(false);
        } catch (error) {
           setError(error)
        }
    }

    useEffect(() => {
        handleBuscar()
    }, []);

    if (loading) return <div className="loading">Carregando...</div>;
    if (error) return <div className="error">Erro: {error}</div>;

    return (
        <div className="container">
            <h1>Lista de Usuários</h1>
            {data.length > 0 ?
                <ul className="data-list" style={{ marginTop: '0px' }}>
                    {data.map((item) => (
                        <li key={item.id} className="data-item">
                            <span>{item.id} - {item.email} </span>
                            <button onClick={() => navigate(`/${item.id}`)}>Atualizar</button>
                        </li>
                    ))}
                </ul> : <p>Dados indisponíveis</p>}
        </div>
    );
};

export default DataList;

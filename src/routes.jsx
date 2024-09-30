import {BrowserRouter, Routes, Route,} from 'react-router-dom'

import Header from './components/Header/index'
import Home from './Home/index'
import Login from './login/index'
import Cadastro from './cadastro'


export default function RouteSistem() {


    return(
    <>
        <Header/> 
            <Routes>

                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/cadastro' element={<Cadastro/>} />

            </Routes>
    </>
    )
}
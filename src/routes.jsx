// import { BrowserRouter, Routes, Route, Outlet, } from 'react-router-dom'

// import Header from './components/Header/index'
// import Home from './Home/index'
// import Login from './login/index'
// import Cadastro from './cadastro'
// // import Compra from './compra'
// import Carrinho from './carrinho'
// import DataList from './dataList'



// export default function RouteSistem() {

//     function Layout() {
//         return (
//             <>
//                 <Header />
//                 <Outlet />
//             </>
//         )
//     }

//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path='/login' element={<Login />} />
//                 <Route element={<Layout />} >
//                     <Route path='/' element={<Home />} />
//                     <Route path='/carrinho' element={<Carrinho/>} />
//                     {/* <Route path='/compra' element={<Compra />} /> */}
                    
//                     <Route path='/cadastro' element={<Cadastro />} />
//                     <Route path='/crud' element={<DataList />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     )
// }

import {BrowserRouter, Routes, Route,} from 'react-router-dom'

import Header from './components/Header/index'
import Home from './Home/index'
import Login from './login'
import Carrinho from './carrinho'
import Cadastro from './cadastro'
import DataList from './dataList'
import Update from './update'


export default function RouteSistem() {


    return(
    <>
        <Header/> 
            <Routes>

                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/cadastro' element={<Cadastro/>} />
                <Route path='/carrinho' element={<Carrinho />} />
                <Route path='/dataList' element={<DataList />} />
                <Route path='/update' element={<Update />} />

            </Routes>
    </>
    )
}
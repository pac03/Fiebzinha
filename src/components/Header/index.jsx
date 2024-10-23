import {Link} from 'react-router-dom'
import user from '../../imagens/img/user.png'
import carrinho from '../../imagens/img/carrin.png'
import './header.css'



export default function Header(){

    return(
        <header className="header">
            <Link className="logo" to=''>Fieb Store</Link> 

            <nav className="navbar">
                    
                <Link to='/carrinho' className='carrin'><img src={carrinho} alt='Imagem do carrinho' className='car'/></Link>
                <Link to='/login' className='login'><img src={user} alt='Imagem de Login' className='userzin'/></Link>
            </nav>
         </header>
    )
}
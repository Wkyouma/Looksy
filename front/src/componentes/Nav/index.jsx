import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Links from './Link/index'

export default function Nav() {
    return (
        <nav className="w-full flex justify-between items-center p-5 ">
            <Link to="/"><img src={logo} className="w-40 h-25 " alt="Logo" /></Link>
            <ul className="flex gap-2">
                <Links to="/">Home</Links>
                <Links to="/Add">Adicionar</Links>
                <Links to="/Biblioteca">Biblioteca</Links>
             
            </ul>
        </nav>
    )
}

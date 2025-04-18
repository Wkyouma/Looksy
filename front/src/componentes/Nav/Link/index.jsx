import { Link } from 'react-router-dom'
export default function Links({ children, to }) {
    return(
        <li className="hover:bg-cyan-500/70 hover:shadow-lg hover:shadow-cyan-500/50 rounded-2xl p-2 hover:text-white w-20 text-gray-400 justify-center text-center duration-300"><Link to={to}>{children}</Link></li>
    )
}
import logo from '../../assets/logo.png'
export default function Nav(){
    return(
        <nav className="w-full flex justify-between items-center p-5   text-zinc-400">
            <img src={logo} className='w-40 h-25'></img>
            <ul className="flex gap-10">
                <li><a href="/">Home</a></li>
                <li><a href="/Add">Adicionar</a></li>
                <li><a href="/Biblioteca">Biblioteca</a></li>
            </ul>
        </nav>
    )
}
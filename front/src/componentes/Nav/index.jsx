export default function Nav(){
    return(
        <nav className="w-full flex justify-between items-center p-5  text-zinc-400">
            <input className="bg-zinc-300 w-7xl rounded-xl text-center h-10 text-black border-none " placeholder="Pesquise suas imagens"></input>
            <ul className="flex gap-10">
                <li><a href="/">Home</a></li>
                <li><a href="/Add">Adicionar</a></li>
                <li><a href="/Biblioteca">Biblioteca</a></li>
            </ul>
        </nav>
    )
}
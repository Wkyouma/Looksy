export default function Nav(){
    return(
        <nav className="w-full flex justify-between items-center p-5 bg-gray-800 text-white">
            <ul className="flex gap-10">
                <li><a href="/">Home</a></li>
                <li><a href="/Add">Adicionar</a></li>
            </ul>
        </nav>
    )
}
import { useEffect, useState } from "react";
import Card from "../../componentes/Card";

export default function Home() {
    const [imagem, setImagem] = useState([]);
    const [text, setText] = useState('');

    const imgFiltrado = imagem.filter((imagem) => {
        return imagem.titulo.toLowerCase().includes(text.toLowerCase())
    })
    useEffect(() => {
        fetch('http://localhost:3000/')
            .then(res => res.json())
            .then(imagem => setImagem(imagem))
            .catch(err => console.error(err));
    }, []);

    const handleDelete = (id) => {
        setImagem(imagem.filter(personagem => personagem.id !== id));
    };

    return (<>
        <input  className="bg-gradient-to-r from-blue-100 to-blue-200 hover:bg-blue-100 placeholder:text-gray-400 transition-all duration-300  w-7xl ml-4 rounded-xl  h-10 text-center text-blue-500 focus:placeholder:text-cyan-600 border border-transparent focus:outline-none focus:ring-0 focus:border-blue-500   focus:shadow-lg focus:shadow-blue-200"  value={text} onChange={(e)=>setText(e.target.value)} placeholder="Pesquise suas imagens"></input>
        
        <ul className="w-screen  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4 p-4">
            
            {imgFiltrado.map((imagem) => (
                <li key={imagem.id}>
                    <Card imagem={imagem} onDelete={handleDelete} />
                </li>
            ))}
        </ul>
        </>
    );
}
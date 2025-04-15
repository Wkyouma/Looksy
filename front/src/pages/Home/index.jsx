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
        <input className="bg-zinc-300 w-7xl ml-4 rounded-xl text-center h-10 text-black border-none " value={text} onChange={(e)=>setText(e.target.value)} placeholder="Pesquise suas imagens"></input>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4 p-4">
            
            {imgFiltrado.map((imagem) => (
                <li key={imagem.id}>
                    <Card imagem={imagem} onDelete={handleDelete} />
                </li>
            ))}
        </ul>
        </>
    );
}
import { useEffect, useState } from "react";
import Card from "../../componentes/Card";

export default function Home() {
    const [imagem, setImagem] = useState([]);
    const [text, setText] = useState('');

    const imgFiltrado = imagem.filter((imagem) =>
        imagem.titulo.toLowerCase().includes(text.toLowerCase())
    );

    useEffect(() => {
        fetch('http://localhost:3000/')
            .then(res => res.json())
            .then(setImagem)
            .catch(err => console.error(err));
    }, []);

    const handleDelete = (id) => {
        setImagem(prev => prev.filter(img => img.id !== id));
    };

    return (
        <>
            <div className="flex justify-center my-4 px-4">
                <input 
                    className="w-full max-w-2xl bg-gradient-to-r from-blue-100 to-blue-200 
                    placeholder:text-gray-400 transition-all duration-300 rounded-xl h-10 text-center 
                    text-blue-500 focus:placeholder:text-cyan-600 border border-transparent 
                    focus:outline-none focus:ring-0 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-200"  
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    placeholder="Pesquise suas imagens"
                />
            </div>
            <div className="flex justify-center  mb-4">

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg xl:grid-cols-7 gap-4 px-4 pb-8">
                {imgFiltrado.map((imagem) => (
                    <li key={imagem.id}>
                        <Card imagem={imagem} isInPasta={false} onDelete={handleDelete} />
                    </li>
                ))}
            </ul>
            </div>
        </>
    );
}

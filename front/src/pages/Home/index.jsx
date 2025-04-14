import { useEffect, useState } from "react";
import Card from "../../componentes/Card";

export default function Home() {
    const [imagem, setImagem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/')
            .then(res => res.json())
            .then(imagem => setImagem(imagem))
            .catch(err => console.error(err));
    }, []);

    const handleDelete = (id) => {
        setImagem(imagem.filter(personagem => personagem.id !== id));
    };

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {imagem.map((imagem) => (
                <li key={imagem.id}>
                    <Card imagem={imagem} onDelete={handleDelete} />
                </li>
            ))}
        </ul>
    );
}
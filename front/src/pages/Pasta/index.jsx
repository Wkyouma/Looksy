import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../componentes/Card";

export default function Pasta() {
    const { id } = useParams();
    const [imagens, setImagens] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/pastas/${id}/imagens`)
            .then(res => res.json())
            .then(data => setImagens(data))
            .catch(err => console.error(err));
    }, [id]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Imagens da Pasta</h1>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4 p-4">
                        
                        {imagens.map((imagem) => (
                            <li key={imagem.id}>
                                <Card 
                                imagem={imagem} 
                                isInPasta={true} 
                            />
                            </li>
                        ))}
                    </ul>
        </div>
    );
}
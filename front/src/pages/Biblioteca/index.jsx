import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Biblioteca() {
    const [pastas, setPastas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/pastas')
            .then(res => res.json())
            .then(data => setPastas(data))
            .catch(err => console.error(err));
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(`Deseja remover a pasta?`);
        if (confirmDelete) {
            try {
                const response = await fetch(`http://localhost:3000/pastas/remove`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: Number(id) }) // Changed from pastaId to id
                });

                if (response.ok) {
                    setPastas(pastas.filter(pasta => pasta.id !== id));
                } else {
                    const error = await response.json();
                    console.error('Erro ao deletar pasta:', error);
                }
            } catch (error) {
                console.error('Erro ao deletar pasta:', error);
            }
        }
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Pastas</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pastas.map((pasta) => (
                    <li key={pasta.id} className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-semibold">{pasta.nome}</h2>
                        <Link
                            to={`/pastas/${pasta.id}`}
                            className="text-blue-500 hover:underline mt-2 block"
                        >
                            Acessar Pasta
                        </Link>
                        <button 
                            onClick={() => handleDelete(pasta.id)} 
                            className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
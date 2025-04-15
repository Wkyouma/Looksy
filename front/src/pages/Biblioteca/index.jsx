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
                    </li>
                ))}
            </ul>
        </div>
    );
}
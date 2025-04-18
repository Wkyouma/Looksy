import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Biblioteca() {
    const [pastas, setPastas] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [PastaNome, setPastaNome] = useState('');
    useEffect(() => {
        fetch('http://localhost:3000/pastas')
            .then(res => res.json())
            .then(data => setPastas(data))
            .catch(err => console.error(err));
    }, []);

    const handleCreate=async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/pastas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome: PastaNome }),
            });
            
            if (response.ok) {
                const newPasta = await response.json();
                setPastas([...pastas, PastaNome]);
                setPastaNome('');
                setIsModalOpen(false);}
        } catch (error) {
            console.error('Erro ao criar pasta:', error);
        }}


    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(`Deseja remover a pasta?`);
        if (confirmDelete) {
            try {
                const response = await fetch(`http://localhost:3000/pastas/remove`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: Number(id) })
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
            <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold mb-4">Pastas</h1>
            <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-blue-500 mb-4 text-white rounded-full hover:bg-blue-600 cursor-pointer">+</button>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"> 
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                    <button className="text-black text-sm bg-red-400 w-6 h-6 rounded-full flex justify-center text-center " onClick={()=>setIsModalOpen(false)}>x</button>
                        <h2 className="text-lg font-semibold mb-4">Criar Pasta</h2>
                        <form onSubmit={handleCreate}>
                            <input type="text" value={PastaNome} onChange={(e)=>setPastaNome(e.target.value)} placeholder="Nome da Pasta" className="border border-gray-300 rounded-md p-2 w-full mb-4" required />
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Criar</button>
                        </form>
                        </div>
                       
                </div>
            )}
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
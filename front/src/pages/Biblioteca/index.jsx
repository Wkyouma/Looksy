// Biblioteca.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PastaModal from "./PastaModal";

export default function Biblioteca() {
    const [pastas, setPastas] = useState([]);
    const [modalConfig, setModalConfig] = useState({
        isOpen: false,
        type: null,
        pasta: null,
        nome: ''
    });

    useEffect(() => {
        fetchPastas();
    }, []);

    const fetchPastas = async () => {
        try {
            const data = await fetch('http://localhost:3000/pastas').then(res => res.json());
            setPastas(data);
        } catch (error) {
            console.error('Erro ao buscar pastas:', error);
        }
    };

    const criarPasta = async () => {
        try {
            const response = await fetch('http://localhost:3000/pastas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome: modalConfig.nome }),
            });

            if (response.ok) {
                const novaPasta = await response.json();
                setPastas([...pastas, novaPasta]);
                closeModal();
            }
        } catch (error) {
            console.error('Erro ao criar pasta:', error);
        }
    };

    const editarPasta = async () => {
        try {
            const response = await fetch(`http://localhost:3000/pastas/${modalConfig.pasta.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: modalConfig.pasta.id, nome: modalConfig.nome }),
            });

            if (response.ok) {
                setPastas(pastas.map(p => 
                    p.id === modalConfig.pasta.id ? { ...p, nome: modalConfig.nome } : p
                ));
                closeModal();
            }
        } catch (error) {
            console.error('Erro ao editar pasta:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        modalConfig.type === 'edit' ? editarPasta() : criarPasta();
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Deseja remover a pasta?')) return;

        try {
            const response = await fetch('http://localhost:3000/pastas/remove', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id }),
            });

            if (response.ok) {
                setPastas(pastas.filter(p => p.id !== id));
            }
        } catch (error) {
            console.error('Erro ao deletar pasta:', error);
        }
    };

    const openModal = (type, pasta = null) => {
        setModalConfig({
            isOpen: true,
            type,
            pasta,
            nome: pasta?.nome || ''
        });
    };

    const closeModal = () => {
        setModalConfig({
            isOpen: false,
            type: null,
            pasta: null,
            nome: ''
        });
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Pastas</h1>
                <button
                    onClick={() => openModal('create')}
                    className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 cursor-pointer"
                >
                    +
                </button>
            </div>

            <PastaModal
                isOpen={modalConfig.isOpen}
                onClose={closeModal}
                onSubmit={handleSubmit}
                value={modalConfig.nome}
                onChange={(e) => setModalConfig(prev => ({ ...prev, nome: e.target.value }))}
                confirmLabel={modalConfig.type === 'edit' ? 'Salvar' : 'Criar'}
            />

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pastas.map((pasta) => (
                    <li key={pasta.id} className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-semibold">{pasta.nome}</h2>
                        <div className="flex flex-col gap-2 mt-2">
                            <Link
                                to={`/pastas/${pasta.id}`}
                                className="bg-blue-500 text-white rounded px-3 py-1 text-center hover:bg-blue-600"
                            >
                                Acessar Pasta
                            </Link>
                            <button
                                onClick={() => openModal('edit', pasta)}
                                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => handleDelete(pasta.id)}
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Remover
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

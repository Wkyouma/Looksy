import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PastaModal from "../../pages/Biblioteca/PastaModal/index.jsx";
export default function Biblioteca() {
    const [pastas, setPastas] = useState([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingPasta, setEditingPasta] = useState(null);
    const [pastaNome, setPastaNome] = useState('');

    useEffect(() => {
        fetchPastas();
    }, []);

    const fetchPastas = async () => {
        try {
            const response = await fetch('http://localhost:3000/pastas');
            const data = await response.json();
            setPastas(data);
        } catch (error) {
            console.error('Erro ao buscar pastas:', error);
        }
    };

    const handleCreate = async (e) => {

        try {
            const response = await fetch('http://localhost:3000/pastas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome: pastaNome }),
            });

            if (response.ok) {
                const novaPasta = await response.json();
                setPastas([...pastas, novaPasta]);
                fecharModal();
            }
        } catch (error) {
            console.error('Erro ao criar pasta:', error);
        }
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/pastas/${editingPasta.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: editingPasta.id, nome: pastaNome }),
            });

            if (response.ok) {
                setPastas(pastas.map(p => p.id === editingPasta.id ? { ...p, nome: pastaNome } : p));
                fecharModal();
            }
        } catch (error) {
            console.error('Erro ao editar pasta:', error);
        }
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

    const abrirModalEdicao = (pasta) => {
        setEditingPasta(pasta);
        setPastaNome(pasta.nome);
        setIsEditModalOpen(true);
    };

    const fecharModal = () => {
        setIsCreateModalOpen(false);
        setIsEditModalOpen(false);
        setEditingPasta(null);
        setPastaNome('');
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Pastas</h1>
                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 cursor-pointer"
                >
                    +
                </button>
            </div>

            <PastaModal
                isOpen={isCreateModalOpen}
                onClose={fecharModal}
                onSubmit={handleCreate}
                value={pastaNome}
                onChange={(e) => setPastaNome(e.target.value)}
                title="Criar Pasta"
                confirmLabel="Criar"
            />

            <PastaModal
                isOpen={isEditModalOpen}
                onClose={fecharModal}
                onSubmit={handleEdit}
                value={pastaNome}
                onChange={(e) => setPastaNome(e.target.value)}
                title="Editar Pasta"
                confirmLabel="Salvar"
            />

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pastas.map((pasta) => (
                    <li key={pasta.id} className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-semibold">{pasta.nome}</h2>
                        <div className="flex flex-col gap-2 mt-2">
                            <Link
                                to={`/pastas/${pasta.id}`}
                                className="text-blue-500 hover:underline"
                            >
                                Acessar Pasta
                            </Link>
                            <button
                                onClick={() => abrirModalEdicao(pasta)}
                                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => handleDelete(pasta.id)}
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
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
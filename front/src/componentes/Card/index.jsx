import { useState, useEffect } from "react";

export default function Card({ imagem, onDelete, isInPasta }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [pastas, setPastas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/pastas')
            .then((res) => res.json())
            .then((data) => setPastas(data))
            .catch((err) => console.error(err));
    }, []);

    const handleDelete = async () => {
        const confirmDelete = window.confirm(`Deseja remover o personagem "${imagem.nome}"?`);
        if (confirmDelete) {
            await fetch(`http://localhost:3000/deletar/${imagem.id}`, {
                method: 'DELETE',
            });
            onDelete(imagem.id); 
        }
    };

    const handleSave = async (pastaId) => {
            const response = await fetch('http://localhost:3000/pastas/adicionar-imagem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ imagemId: imagem.id, pastaId }),
            });

            if (response.ok) {
                console.log(`Imagem ${imagem.id} adicionada à pasta ${pastaId}`);
                setShowDropdown(false); 
            }
        }

    const handleRemoveFromPasta = async () => {
        try {
            const response = await fetch('http://localhost:3000/pastas/remover-imagem', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    imagemId: imagem.id, 
                    pastaId: imagem.caminho 
                }),
            });

            if (response.ok) {
                console.log(`Imagem ${imagem.id} removida da pasta`);
                window.location.reload();
            }
        } catch (error) {
            console.error('Erro ao remover imagem da pasta:', error);
        }
    };

    return (
        <div className="relative w-60 h-80 group overflow-hidden rounded-lg shadow-md">
            <img
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                src={imagem.imagem_url}
                alt={imagem.nome}
            />

            <div className="absolute inset-0 bg-black/50 bg-opacity-90 flex flex-col justify-center items-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-sm font-bold text-white text-center z-50">{imagem.titulo}</h2>
                <p className="text-xs text-white text-center mt-1">Descrição: {imagem.descricao}</p>

                <div className="flex mt-3 space-x-2">
                    <button
                        onClick={handleDelete}
                        className="px-2 py-1 bg-blue-500 text-white text-xs rounded-md hover:bg-blue-600"
                    >
                        Remover
                    </button>
                    {isInPasta && (
                        <button
                            onClick={handleRemoveFromPasta}
                            className="px-2 py-1 bg-yellow-500 text-white text-xs rounded-md hover:bg-yellow-600"
                        >
                            Remover da Pasta
                        </button>
                    )}
                    {!isInPasta && (
                        <div className="relative">
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                className="px-2 py-1 bg-white text-blue-500 text-xs rounded-md hover:bg-gray-300 duration-200 transition-all"
                            >
                                Salvar
                            </button>
                            {showDropdown && (
                                <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                                    <ul>
                                        {pastas.map((pasta) => (
                                            <li
                                                key={pasta.id}
                                                onClick={() => handleSave(pasta.id)}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                                {pasta.nome}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
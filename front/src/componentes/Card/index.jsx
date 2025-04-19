import { useState, useEffect } from "react";
import { useDropdown } from "../../context/DropdownContext";

export default function Card({ imagem, onDelete, isInPasta, pastaId, onRemove }) {
    const [pastas, setPastas] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { openDropdownId, toggleDropdown, closeDropdown } = useDropdown();

    useEffect(() => {
        fetch('http://localhost:3000/pastas')
            .then((res) => res.json())
            .then((data) => setPastas(data))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-container')) {
                closeDropdown();
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [closeDropdown]);

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
            closeDropdown();
        }
    };

    const handleRemoveFromPasta = async () => {
        try {
            const response = await fetch(`http://localhost:3000/pastas/${pastaId}/imagens/${imagem.id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                onRemove?.(imagem.id);
            }
        } catch (error) {
            console.error('Erro ao remover imagem da pasta:', error);
        }
    };

    return (
        <div className="relative w-60 h-80 group rounded-lg shadow-md">
            <img
                className="w-full h-full object-cover rounded-lg"
                src={imagem.imagem_url}
                alt={imagem.nome}
            />
            <div className={`absolute inset-0 bg-black/50 flex flex-col justify-center items-center p-2 transition-opacity duration-300 rounded-lg
                ${isModalOpen ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}
            >
                <h2 className="text-sm font-bold text-white text-center">{imagem.titulo}</h2>
                <div className="max-h-20 overflow-y-scroll w-full px-2 mt-1 custom-scroll">
                    <p className="text-xs text-white text-center break-words">
                        Descrição: {imagem.descricao}
                    </p>
                    </div>

                <div className="flex mt-3 space-x-2">
                    <button
                        onClick={handleDelete}
                        className="px-2 py-1 bg-blue-500 text-white text-xs rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Remover
                    </button>
                    {isInPasta && (
                        <button
                            onClick={handleRemoveFromPasta}
                            className="px-2 py-1 bg-yellow-500 text-white text-xs rounded-md hover:bg-yellow-600 transition-colors"
                        >
                            Remover da Pasta
                        </button>
                    )}
                    {!isInPasta && (
                        <div className="relative dropdown-container">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleDropdown(imagem.id);
                                }}
                                className="px-2 py-1 bg-white text-blue-500 text-xs rounded-md hover:bg-gray-300 transition-colors"
                            >
                                Salvar
                            </button>
                            {openDropdownId === imagem.id && (
                                <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-[60]">
                                    <ul>
                                        {pastas.map((pasta) => (
                                            <li
                                                key={pasta.id}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleSave(pasta.id);
                                                    closeDropdown();
                                                }}
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
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-2 py-1 bg-green-500 text-white text-xs rounded-md hover:bg-green-600 transition-colors"
                    >
                        Visualizar
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div 
                    className="fixed inset-0 bg-black/75 flex items-center justify-center z-[100]"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setIsModalOpen(false);
                        }
                    }}
                >
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-4xl w-96 relative" 
                     
                    >
                        <button
                            className=" bg-red-500 text-white w-12 h-8 rounded-t flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
                            onClick={() => setIsModalOpen(false)}
                        >
                            ×
                        </button>
                        <img 
                            className="w-full h-auto rounded-b rounder-r rounded-l"
                            src={imagem.imagem_url} 
                            alt={imagem.titulo} 
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
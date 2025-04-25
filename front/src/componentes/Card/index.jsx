import { useState, useEffect } from "react";
import Modal from "../Modal";

export default function Card({ imagem: imagemInicial, onDelete, isInPasta, pastaId, onRemove }) {
    const [imagem, setImagem] = useState(imagemInicial);
    const [pastas, setPastas] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [imagemEditada, setImagemEditada] = useState(imagemInicial);

    const handleDropdownClick = async () => {
        try {
            const res = await fetch('http://localhost:3000/pastas');
            const data = await res.json();
            setPastas(data);
            setShowDropdown(!showDropdown);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.dropdown-container')) {
                setShowDropdown(false);
            }
        };

        if (showDropdown) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showDropdown]);

    const handleDelete = async () => {
        if (window.confirm(`Deseja remover "${imagem.titulo}"?`)) {
            await fetch(`http://localhost:3000/deletar/${imagem.id}`, {
                method: 'DELETE',
            });
            onDelete(imagem.id);
        }
    };

    const handleSave = async (pastaId) => {
        try {
            const response = await fetch('http://localhost:3000/pastas/adicionar-imagem', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ imagemId: imagem.id, pastaId }),
            });

            if (response.ok) {
                setShowDropdown(false);
            }else{
                alert("imagem já existe na pasta")
            }
        
        } catch (error) {
            console.error('Erro ao salvar:', error);
        }
    };

    const handleRemoveDaPasta = async () => {
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

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/imagens/${imagem.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(imagemEditada),
            });

            if (response.ok) {
                setImagem(imagemEditada);
                setIsEditModalOpen(false);
            }
        } catch (error) {
            console.error('Erro ao atualizar imagem:', error);
        }
    };

    return (
        <div className="relative w-60 h-80 group rounded-lg shadow-md">
            <img
                className="w-full h-full object-cover rounded-lg"
                src={imagem.imagem_url}
                alt={imagem.titulo}
            />
            <div className={`absolute inset-0 bg-black/50 flex flex-col justify-center items-center p-2 transition-opacity duration-300 rounded-lg
                ${isModalOpen ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}
            >
                <h2 className="text-sm font-bold text-white text-center">{imagem.titulo}</h2>
                <div className="max-h-20 overflow-y-scroll w-full px-2 mt-1 custom-scroll">
                    <p className="text-xs text-white text-center break-words">
                        {imagem.descricao}
                    </p>
                </div>

                <div className="flex justify-center items-center mt-3 space-x-2">
                    {!isInPasta && (
                        <button
                            onClick={handleDelete}
                            className="px-2 py-1 bg-red-500 text-white text-xs rounded-md hover:bg-red-600 transition-colors"
                        >
                            Remover
                        </button>
                    )}
                    
                    {isInPasta ? (
                        <button
                            onClick={handleRemoveDaPasta}
                            className="px-2 py-1 bg-yellow-500 text-white text-xs rounded-md hover:bg-yellow-600 transition-colors"
                        >
                            Remover da Pasta
                        </button>
                    ) : (
                        <div className="relative dropdown-container">
                            <button
                                onClick={handleDropdownClick}
                                className="px-2 py-1 bg-white text-blue-500 text-xs rounded-md hover:bg-gray-300 transition-colors"
                            >
                                Salvar
                            </button>
                            {showDropdown && (
                                <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-[60]">
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

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-2 py-1 bg-green-500 text-white text-xs     rounded-md hover:bg-green-600 transition-colors"
                    >
                        Visualizar
                    </button>

                </div> 
                {!isInPasta && <button
                        onClick={() => setIsEditModalOpen(true)}
                        className="px-2 py-1 bg-blue-500 text-white text-xs mt-2 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Editar
                    </button>}
            </div>

            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <img 
                    src={imagem.imagem_url} 
                    alt={imagem.titulo} 
                    className="w-full h-auto rounded"
                />
                <h1 className="text-blue-600 font-bold">{imagem.titulo}</h1>
                <p className="mt-2 text-gray-600 text-sm break-words">{imagem.descricao}</p>
                <p className="mt-2 text-gray-600 text-sm">
                    Data de upload: {new Date(imagem.data_upload).toLocaleDateString('pt-BR')}
                </p>
                <p className="mt-2 text-gray-600 text-sm">
                    Autor: {imagem.autor || 'Não especificado'}
                </p>
            </Modal>
            )}

            <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
                <h2 className="text-xl font-bold mb-4">Editar Imagem</h2>
                <form onSubmit={handleUpdate} className="space-y-4">
                    <input
                        type="text"
                        value={imagemEditada.titulo}
                        onChange={e => setImagemEditada({ ...imagemEditada, titulo: e.target.value })}
                        placeholder="Título"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    <textarea
                        value={imagemEditada.descricao}
                        onChange={e => setImagemEditada({ ...imagemEditada, descricao: e.target.value })}
                        placeholder="Descrição"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        rows="3"
                    />
                    <input
                        type="text"
                        value={imagemEditada.autor || ''}
                        onChange={e => setImagemEditada({ ...imagemEditada, autor: e.target.value })}
                        placeholder="Autor"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    <div className="flex justify-end gap-2">
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Salvar
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
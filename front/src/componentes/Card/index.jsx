export default function Card({imagem, onDelete }) {
    const handleDelete = async () => {
        const confirmDelete = window.confirm(`Deseja remover o personagem "${imagem.nome}"?`);
        if (confirmDelete) {
            await fetch(`http://localhost:3000/deletar/${imagem.id}`, {
                method: 'DELETE',
            });
            onDelete(imagem.id); 
        }
    };

    return (
        <div className="relative w-60 h-80 group overflow-hidden rounded-lg shadow-md">
    <img
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        src={imagem.imagem_url}
        alt={imagem.nome}
    />

    {/* Overlay que aparece no hover */}
    <div className="absolute inset-0 bg-black/50 bg-opacity-90 flex flex-col justify-center items-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-sm font-bold text-white text-center z-50">{imagem.titulo}</h2>
        <p className="text-xs text-white text-center mt-1">Descrição: {imagem.descricao}</p>

        <div className="flex mt-3 space-x-2">
            <button
                onClick={handleDelete}
                className="px-2 py-1 bg-red-500 text-white text-xs rounded-md hover:bg-red-600"
            >
                Remover
            </button>
            <button className="px-2 py-1 bg-blue-500 text-white text-xs rounded-md hover:bg-blue-600">
                Editar
            </button>
        </div>
    </div>
</div>

    );
}
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
        <div className="bg-white shadow-md rounded-lg p-4 m-4">
            <img className="w-40 h-40" src={imagem.imagem_url} alt={imagem.nome} />
            <h2 className="text-xl font-bold">{imagem.titulo}</h2>

            <p className="text-gray-700">Descrição: {imagem.descricao}</p>
            <button
                onClick={handleDelete}
                className="mt-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
                Remover
            </button>
            <button className="mt-4 p-2 w-20 bg-blue-500 text-white rounded-md hover:bg-blue-600 ml-2">
                Editar
            </button>
        </div>
    );
}
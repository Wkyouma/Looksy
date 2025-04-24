
export default function PastaModal({ isOpen, onClose, onSubmit, value, onChange, confirmLabel }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                <div className="flex justify-between items-center mb-4">
                    <button
                        className="text-white text-sm bg-red-600 w-6 h-6 rounded flex 
                        items-center justify-center hover:bg-red-700 cursor-pointer"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        value={value}
                        onChange={onChange}
                        placeholder="Nome da Pasta"
                        className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:ring-2
                         focus:ring-blue-500 focus:border-transparent outline-none"
                        required
                    />
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 cursor-pointer"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600
                             transition-colors cursor-pointer"
                        >
                            {confirmLabel}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
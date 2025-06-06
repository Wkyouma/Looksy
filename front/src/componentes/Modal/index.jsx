
export default function Modal({ isOpen, onClose, children }){
    if (!isOpen) return null;
    
    return (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-96 relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                    onClick={onClose}
                >×</button>
                {children}
            </div>
        </div>
    );
};
import { createContext, useContext, useState } from 'react';

const DropdownContext = createContext();

export function DropdownProvider({ children }) {
    const [openDropdownId, setOpenDropdownId] = useState(null);

    const closeDropdown = () => setOpenDropdownId(null);
    const toggleDropdown = (id) => {
        setOpenDropdownId(openDropdownId === id ? null : id);
    };

    return (
        <DropdownContext.Provider value={{ openDropdownId, toggleDropdown, closeDropdown }}>
            {children}
        </DropdownContext.Provider>
    );
}

export const useDropdown = () => useContext(DropdownContext);
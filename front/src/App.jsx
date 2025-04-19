import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DropdownProvider } from "./context/DropdownContext";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Layout from "./componentes/Layout";
import Biblioteca from "./pages/Biblioteca";
import Pasta from "./pages/Biblioteca/Pasta/index.jsx";

export default function App() {
    return (
        <DropdownProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/Add" element={<Add />} />
                        <Route path="/Biblioteca" element={<Biblioteca />} />
                        <Route path="/pastas/:id" element={<Pasta />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </DropdownProvider>
    );
}

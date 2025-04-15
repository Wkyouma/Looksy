import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Layout from "./componentes/Layout";
import Biblioteca from "./pages/Biblioteca";
import Pasta from "./pages/Pasta";

export default function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Biblioteca" element={<Biblioteca />} />
        <Route path="/pastas/:id" element={<Pasta />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

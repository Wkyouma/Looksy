import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Layout from "./componentes/Layout";
export default function App() {
  return (
    <BrowserRouter>
      <Routes >
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Add" element={<Add />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CriarVeiculo from "./pages/CriarVeiculo";
import EditarVeiculo from "./pages/EditarVeiculo";

export default function App() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Veículos</Link> | <Link to="/adicionar">Adicionar</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adicionar" element={<CriarVeiculo />} />
        <Route path="/editar/:id" element={<EditarVeiculo />} />
      </Routes>
    </div>
  );
}

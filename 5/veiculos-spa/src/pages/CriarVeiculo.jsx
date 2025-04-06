import React from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"
import VeiculoForm from "../components/VeiculoForm"

export default function CriarVeiculo() {
  const navigate = useNavigate()

  const criarVeiculo = async (data) => {
    await api.post("/veiculo", data)
    navigate("/")
  }

  return (
    <div>
      <h2>Adicionar Veículo</h2>
      <VeiculoForm onSubmit={criarVeiculo} />
    </div>
  )
}

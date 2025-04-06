import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import api from "../services/api"
import VeiculoForm from "../components/VeiculoForm"

export default function EditarVeiculo() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [veiculo, setVeiculo] = useState(null)

  useEffect(() => {
    api.get(`/veiculo/${id}`).then((res) => setVeiculo(res.data))
  }, [id])

  const editVeiculo = async (data) => {
    await api.put(`/veiculo/${id}`, data)
    navigate("/")
  }

  return veiculo ? (
    <div>
      <h2>Editar Veículo</h2>
      <VeiculoForm initialData={veiculo} onSubmit={editVeiculo} />
    </div>
  ) : (
    <p>Carregando...</p>
  )
}

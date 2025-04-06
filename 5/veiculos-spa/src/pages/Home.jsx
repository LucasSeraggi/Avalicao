import React, { useEffect, useState } from "react"
import api from "../services/api"
import VeiculoList from "../components/VeiculoList"

export default function Home() {
  const [veiculos, setVeiculos] = useState([])

  const fetchVeiculos = async () => {
    const res = await api.get("/veiculo")
    setVeiculos(res.data)
  }

  const deleteVeiculo = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir?")) {
      await api.delete(`/veiculo/${id}`)
      fetchVeiculos()
    }
  }

  useEffect(() => {
    fetchVeiculos()
  }, [])

  return <VeiculoList veiculos={veiculos} onDelete={deleteVeiculo} />
}

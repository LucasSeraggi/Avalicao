import React, { useState } from "react"
import "./VeiculoForm.css"

export default function VeiculoForm({ initialData = {}, onSubmit }) {
  const [veiculo, setVeiculo] = useState({
    veiculo: "",
    marca: "",
    ano: "",
    descricao: "",
    vendido: false,
    ...initialData,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setVeiculo({
      ...veiculo,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(veiculo)
  }

  return (
    <div className="form-container">
      <form className="veiculo-form" onSubmit={handleSubmit}>
        <label>Veículo:</label>
        <input name="veiculo" value={veiculo.veiculo} onChange={handleChange} required />

        <label>Marca:</label>
        <input name="marca" value={veiculo.marca} onChange={handleChange} required />

        <label>Ano:</label>
        <input name="ano" type="number" value={veiculo.ano} onChange={handleChange} required />

        <label>Descrição:</label>
        <textarea name="descricao" value={veiculo.descricao} onChange={handleChange} />

        <label>
          Vendido
          <input
            type="checkbox"
            name="vendido"
            checked={veiculo.vendido}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Salvar</button>
      </form>
    </div>
  )
}
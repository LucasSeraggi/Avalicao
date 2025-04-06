import React from "react"
import { Link } from "react-router-dom"

export default function VeiculoList({ veiculos, onDelete }) {
  return (
    <div>
      <h2>Lista de Veículos</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Veículo</th>
            <th>Marca</th>
            <th>Ano</th>
            <th>Vendido</th>
            <th>Descrição</th>
            <th>Criado em</th>
            <th>Atualizado em</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map((v) => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.veiculo}</td>
              <td>{v.marca}</td>
              <td>{v.ano}</td>
              <td>{v.vendido ? "Sim" : "Não"}</td>
              <td>{v.descricao}</td>
              <td>{new Date(v.created).toLocaleString()}</td>
              <td>{new Date(v.updated).toLocaleString()}</td>
              <td>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Link to={`/editar/${v.id}`}>Editar</Link>
                </div>
                <div style={{margin: 1}}>
                  <button onClick={() => onDelete(v.id)}>Excluir</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

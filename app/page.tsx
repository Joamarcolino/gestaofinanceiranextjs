'use client'

import { useState } from "react"

export default function App() {
  const [lancamentos, setLancamentos] = useState([])
  const [valor, setValor] = useState(0) // Changed from undefined to 0
  const [descricao, setDescricao] = useState("")
  
  function adicionarLancamento() {
    // Better validation: check if description is not empty and value is valid
    if (descricao.trim() && !isNaN(valor) && valor !== 0) {
      setLancamentos([...lancamentos, {descricao, valor}])
      setValor(0)
      setDescricao("")
    }
  }
  
  const calcularSaldo = (index) => {
    return lancamentos.slice(0, index + 1).reduce((sum, item) => sum + item.valor, 0)
  }
  
  return (
    <div className="p-4">
      {/* Input form separated from table */}
      <div className="mb-4 flex gap-2 justify-center">
        <input 
          value={valor} 
          onChange={(e) => setValor(Number(e.target.value))} 
          placeholder="100.0" 
          className="border border-gray-300 text-black text-center px-2 py-1 rounded" 
          type="number" 
        />
        <input 
          value={descricao} 
          onChange={(e) => setDescricao(e.target.value)} 
          placeholder="Descrição" 
          className="border border-gray-300 text-black text-center px-2 py-1 rounded" 
          type="text" 
        />
        <button 
          onClick={adicionarLancamento}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Adicionar
        </button>
      </div>

      {/* Table with proper structure */}
      <table className="w-full max-w-2xl mx-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Descrição</th>
            <th className="border border-gray-300 p-2">Valor</th>
            <th className="border border-gray-300 p-2">Saldo atual</th>
          </tr>
        </thead>
        <tbody>
          {lancamentos.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2">{item.descricao}</td>
              <td className="border border-gray-300 p-2">{item.valor}</td>
              <td className="border border-gray-300 p-2">{calcularSaldo(index)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Show message when no entries */}
      {lancamentos.length === 0 && (
        <p className="text-center text-gray-500 mt-4">Nenhum lançamento cadastrado</p>
      )}
    </div>
  )
}
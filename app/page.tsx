'use client'
import { useMemo, useState } from "react"
import Inputebuttons from "./components/inputebuttons"
import Listaeconomica from "./components/listaeconomica"
import LANCAMENTO from './components/types'
export default function App(){

  const[valor, setValor] = useState<number | string>("")
  const[descricao, setDescricao] = useState("")
  const[lancamentos, setLancamentos] = useState<LANCAMENTO[]>([])
  const[saldo] = useState(1000)

function add({valor, descricao}:LANCAMENTO){
  if (!valor || Number.isNaN(Number(valor))) return alert("Porfavor, não deixe um valor inválido.");
  if (!descricao) return alert("Porfavor não deixe sem uma descrição.");

  const lancamento: LANCAMENTO = ({valor:Number(valor), descricao:String(descricao)})

  setLancamentos([...lancamentos, lancamento])
  setValor("")
  setDescricao("")
}
function deleter(index:number){
 const lancamentoNovo = lancamentos.filter((_:any, i:number) => i !== index)
  setLancamentos(lancamentoNovo)
}

  return(
    <section className="flex justify-center text-center flex-col min-h-screen">
      <Inputebuttons deleter={deleter}  add={add} valor={valor} descricao={descricao} setDescricao={setDescricao} setValor={setValor} setLancamento={setLancamentos} />
      <Listaeconomica deleter={deleter} saldo={saldo}  lancamentos={lancamentos}/>
    </section>
  )
}
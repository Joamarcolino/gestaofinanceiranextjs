'use client'

import { useState } from "react"
import Inputebuttons from "./components/inputebuttons"
import Listaeconomica from "./components/listaeconomica"
import { refresh } from "next/cache"

type LANCAMENTO = {
  valor:number | string
  descricao:string
}
export default function App(){
  const[valor, setValor] = useState<number | string>("")
  const[descricao, setDescricao] = useState("")
  const[lancamento, setLancamento] = useState<LANCAMENTO>({valor, descricao})
  const[lancamentos, setLancamentos] = useState<LANCAMENTO[]>([])
  const[saldo, setSaldo] = useState(1000)

function add(){
  if (!valor) return alert("Porfavor, não deixe o valor como nada.");
  if (!descricao) return alert("Porfavor não deixe sem uma descrição.");
    setLancamentos([...lancamentos, lancamento])
}
function deleter(index:number){
 const lancamentoNovo = lancamentos.filter((_:any, i:number) => i !== index)
  setLancamentos(lancamentoNovo)
}

  return(
    <section>
      <Inputebuttons deleter={deleter} lancamento={lancamento} add={add} valor={valor} descricao={descricao} setDescricao={setDescricao} setValor={setValor} setLancamento={setLancamentos} />
      <Listaeconomica deleter={deleter} saldo={saldo} setSaldo={setSaldo}  lancamento={lancamento} lancamentos={lancamentos} valor={valor} descricao={descricao} setDescricao={setDescricao} setLancamento={setLancamentos} />
    </section>
  )
}
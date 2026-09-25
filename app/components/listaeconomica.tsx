'use client'

export default function Listaeconomica({saldo, setSaldo, valor,descricao,setDescricao,setLancamento, lancamentos, deleter}:any) {
    type LANCAMENTO = {
  valor:number
  descricao:string
}

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Descricao</th>
                        <th>Valor</th>
                        <th>Saldo atual</th>
                    </tr>
                </thead>
                <tbody>
                    {lancamentos.map((i:number, lancamento:LANCAMENTO) => {
                        <tr key={i}>
                            <td>{lancamento.descricao}</td>
                            <td>{lancamento.valor}</td>
                            <th>{saldo += lancamento.valor}</th>
                            <button onKeyDown={({e, i}:any) => {e.key === 'Backspace' && 'Minus' ? deleter(i) : console.log("nun bro")}} onClick={(i) => deleter(i)}>Delete</button>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
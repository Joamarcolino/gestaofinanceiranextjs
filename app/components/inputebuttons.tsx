'use client'

export default function Inputebuttons({add,valor, descricao, setDescricao, setValor}:any){
    return(
        <form className="flex max-w-full gap-2 text-center justify-center"  onSubmit={(e) => { add({valor, descricao}); e.preventDefault(); }}>
            <input value={descricao} onChange={(e) => setDescricao(e.target.value)} type="text" placeholder="Insira a descrição..."/>
            <input value={valor}  onChange={(e) => setValor(e.target.value)} type="number" placeholder="Insira o valor..."/>
            <button type="submit">Add</button>
        </form>
    )
}
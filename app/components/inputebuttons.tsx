'use client'

export default function Inputebuttons({add,valor, descricao, setDescricao, setValor,deleter }:any){
    return(
        <form onChange={(e) => e.preventDefault()} onSubmit={() =>  add()}>
            <input value={descricao} onChange={(e) => setDescricao(e.target.value)} type="text" placeholder="Insira a descrição..."/>
            <input value={valor}  onChange={(e) => setValor((e.target.value))} type="number" placeholder="Insira o valor..."/>
            <button type="submit">Add</button>
        </form>
    )
}
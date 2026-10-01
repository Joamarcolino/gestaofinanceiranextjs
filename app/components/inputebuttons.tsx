'use client'

export default function Inputebuttons({ add, valor, descricao, setDescricao, setValor }: any) {
  const inputStyle =
    "flex-1 min-w-[10rem] border border-[#424242] bg-[#2f2f2f] px-3 py-2 text-sm text-[#ececec] placeholder:text-[#8e8e8e] transition focus:border-[#10a37f] focus:outline-none focus:ring-1 focus:ring-[#10a37f]"

  return (
    <form
      className="flex w-full max-w-3xl flex-wrap items-center justify-center gap-3 border border-[#424242] bg-[#171717] p-4"
      onSubmit={(e) => { add({ valor, descricao }); e.preventDefault(); }}
    >
      <input className={inputStyle} value={descricao} onChange={(e) => setDescricao(e.target.value)} type="text" placeholder="Insira a descrição..." />
      <input className={inputStyle} value={valor} onChange={(e) => setValor(e.target.value)} type="number" placeholder="Insira o valor..." />
      <button
        type="submit"
        className="bg-[#10a37f] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#1a7f64] focus:outline-none focus:ring-1 focus:ring-[#10a37f] focus:ring-offset-2 focus:ring-offset-[#171717] active:bg-[#146c54]"
      >
        Add
      </button>
    </form>
  )
}
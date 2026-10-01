import LANCAMENTO from "./types"

interface Props {
  saldo: number;
  lancamentos: LANCAMENTO[];
  deleter: (index: number) => void;
}

export default function Listaeconomica({ saldo, lancamentos, deleter }: Props) {
  const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

  // shared by header and rows so they always line up
  const cols = "sm:grid-cols-[minmax(0,1fr)_11rem_11rem_4.5rem]"

  let atual = saldo

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="border border-[#424242] bg-[#171717]">

        {/* Scroll area: vertical past ~26rem, horizontal when the columns don't fit */}
        <div className="max-h-[26rem] overflow-auto [scrollbar-color:#424242_transparent] [scrollbar-width:thin]">
          <div className="sm:min-w-[40rem]">

            {/* Header: desktop only, sticky while scrolling */}
            <div className={`sticky top-0 z-10 hidden gap-3 border-b border-[#424242] bg-[#2f2f2f] px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#b4b4b4] sm:grid ${cols}`}>
              <span className="text-left">Descrição</span>
              <span className="text-right">Valor</span>
              <span className="text-right">Saldo atual</span>
              <span />
            </div>

            {lancamentos.length === 0 && (
              <p className="px-4 py-8 text-center text-sm text-[#8e8e8e]">
                Nenhum lançamento ainda.
              </p>
            )}

            <ul className="divide-y divide-[#2f2f2f]">
              {lancamentos.map((lancamento, index) => {
                atual += lancamento.valor
                const valorFmt = brl(lancamento.valor)
                const saldoFmt = brl(atual)

                return (
                  <li
                    key={index}
                    className={`grid grid-cols-[minmax(0,1fr)_auto] gap-x-3 gap-y-1 px-4 py-3 text-sm transition hover:bg-[#212121] sm:items-center ${cols}`}
                  >
                    {/* Description */}
                    <span className="col-start-1 row-start-1 min-w-0 break-words text-left font-medium text-[#ececec] sm:col-auto sm:row-auto sm:font-normal">
                      {lancamento.descricao}
                    </span>

                    {/* Value */}
                    <div className="col-span-2 flex items-baseline justify-between gap-3 sm:col-span-1 sm:block sm:min-w-0 sm:text-right">
                      <span className="text-[0.65rem] uppercase tracking-wide text-[#8e8e8e] sm:hidden">Valor</span>
                      <span
                        title={valorFmt}
                        className={`min-w-0 break-all font-medium tabular-nums sm:block sm:truncate sm:break-normal ${lancamento.valor >= 0 ? "text-[#19c37d]" : "text-[#f87171]"}`}
                      >
                        {valorFmt}
                      </span>
                    </div>

                    {/* Running balance */}
                    <div className="col-span-2 flex items-baseline justify-between gap-3 sm:col-span-1 sm:block sm:min-w-0 sm:text-right">
                      <span className="text-[0.65rem] uppercase tracking-wide text-[#8e8e8e] sm:hidden">Saldo</span>
                      <span
                        title={saldoFmt}
                        className="min-w-0 break-all font-semibold tabular-nums text-[#ececec] sm:block sm:truncate sm:break-normal"
                      >
                        {saldoFmt}
                      </span>
                    </div>

                    {/* Delete: top-right on mobile, last column on desktop */}
                    <div className="col-start-2 row-start-1 justify-self-end sm:col-auto sm:row-auto">
                      <button
                        type="button"
                        onClick={() => deleter(index)}
                        onKeyDown={(e) => {
                          if (e.key === 'Backspace' || e.key === 'Delete') deleter(index);
                        }}
                        className="px-2 py-1 text-xs font-medium text-[#f87171] transition hover:bg-[#2f2f2f] focus:outline-none focus:ring-1 focus:ring-[#f87171]"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
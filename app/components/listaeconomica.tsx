import { useMemo } from "react";
import LANCAMENTO from "./types" // ou de onde vier a interface


interface Props {
  saldoInicial: number;
  saldo: number;
  lancamentos: LANCAMENTO[];
  deleter: (index: number) => null
}
export default function Listaeconomica({ saldo, lancamentos, deleter }: Props) {

  return (
    <div className="flex text-center justify-center">
      <table className="w-[25rem] max-w-full justify-center content-center border-2 ">
        <thead>
          <tr className="flex text-center justify-center w-full max-w-full ">
            <th className="border-r-2  w-full p-1">Descricao</th>
            <th className="border-r-2  w-full p-1">Valor</th>
            <th className=" w-full p-1">Saldo atual</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {lancamentos.map((lancamento, index) => (
            <section className="flex">
              <tr className="flex border w-full max-w-[25rem] max-h[25rem] p-1 gap-5 content-between border-black " key={index}>
                <div className="flex border-r text-justify h-full w-full max-w-full">
                  <td className="flex border-r text-[0.8rem]">{lancamento.descricao}</td>
                </div>
                <div className="flex border-r h-full w-full text-justify">
                  <td className="flex border-r text-[0.8rem]">{lancamento.valor}</td>
                </div>
                <div className="flex w-full h-full text-justify">
                  <th className="flex w-full">{saldo += lancamento.valor}</th>
                </div>
              </tr>
              <td>
                <button
                  type="button"
                  onClick={() => deleter(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Backspace' || e.key === 'Delete') deleter(index);
                  }}
                >
                  Delete
                </button>
              </td>
            </section>
          ))}
        </tbody>
      </table>
    </div>
  );
}
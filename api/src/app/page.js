import {retornaUfs} from "./servicos/ufs";
import estilo from "./page.module.css";

const listaUfs = await retornaUfs();

export default function Home() {
  return (
    <main className={estilo.main} >
      <header className={estilo.header} >
        App de UFs
      </header >
      <table className={estilo.tabela} >
        <thead >
          <tr >
            <th >ID </th >
            <th >UF </th >
            <th >NOME </th >
          </tr >
        </thead >
        <tbody >
          {
            Array.isArray(listaUfs) ?
            listaUfs.map((dadosUF, index) => (
              <tr key={index} >
                <td >{dadosUF.id} </td >
                <td >{dadosUF.uf} </td >
                <td >{dadosUF.nome} </td >
              </tr >
            ))
            :
            <tr>
              <td colSpan="3">Erro ao consumir api</td>
            </tr>
          }
        </tbody >
      </table >
    </main >
  );
}
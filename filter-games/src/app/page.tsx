'use client';
import estilos from './page.module.css';
import Lupa from '/public/lupa.png';
import Image from 'next/image';
import ItemJogos from './componentes/itemJogos';
import { useState } from 'react';
import { filtrarJogo, buscarJogo, retornarJogos } from './servico';

export default function Home() {
  const [listaJogos, setListaJogos] = useState(retornarJogos);
  const [textoBusca, setTextoBusca] = useState("");

  const handleFiltrarJogoPlataforma = (plataforma: string) => {
    setListaJogos(filtrarJogo(plataforma));
    setTextoBusca("");
  }

  const handleLimparFiltro = () => {
    setListaJogos(retornarJogos());
    setTextoBusca("");
  }

  const handleBuscarJogo = (textoDigitado: string) => {
    setTextoBusca(textoDigitado);
    setListaJogos(buscarJogo(textoDigitado));
  };

  return (
    <div className={estilos.container_principal}>
      <h2>Lista de Jogos Exclusivos</h2>
      <div className={estilos.container_btns}>
        <button onClick={() => handleFiltrarJogoPlataforma("xbox")}>XBOX</button>
        <button onClick={() => handleFiltrarJogoPlataforma("playstation")}>PlayStation</button>
        <button onClick={() => handleFiltrarJogoPlataforma("nintendo")}>Nintendo</button>
        <button onClick={() => handleLimparFiltro()}>Limpar Filtro</button>
      </div>

      <div className={estilos.container_input}>
        <Image src={Lupa} alt="ícone" />
        <input
          type="text"
          value={textoBusca}
          onChange={(event) => handleBuscarJogo(event.target.value)}
          placeholder="Pesquise um jogo ou plataforma"
        />
      </div>

      <div className={estilos.container_cards}>
        {listaJogos.map((jogo, index) => (
          <ItemJogos
            key={index}
            nome={jogo.nome}
            plataforma={jogo.plataforma}
          />
        ))}
      </div>
    </div>
  );
}

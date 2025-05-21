'use client';
import { useState } from 'react';
import estilos from './page.module.css';
import Menu from "./componentes/menu/Menu";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);

  function atualizarMenu() {
    setMenuAberto(!menuAberto);
  };

  return (
    <main className={estilos.container}>
      <header className={estilos.topo}>
        <button className={estilos.botao} onClick={atualizarMenu}>
          {menuAberto ? <IoIosClose /> : <CiMenuBurger />}
        </button>
          {menuAberto && (
        <Menu />
      )}
      </header>
    
    </main>
  );
}
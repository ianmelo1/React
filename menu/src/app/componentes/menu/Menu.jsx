import estilos from '@/app/componentes/menu/Menu.module.css'

export default function Menu(){
    return(
      <nav className={estilos.container}>
        <li>Entrada</li>
        <li>legal</li>
        <li>saida</li>
      </nav>
      
    );

}
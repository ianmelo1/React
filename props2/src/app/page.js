import estilos from './page.module.css'
import Globe from '/public/globe.svg';
import BoxMensagem from './componentes/BoxMensagem';
import Image from 'next/image';

export default function Home () {
  return (
    <div className={estilos.conteudo}>
      <h1>Minhas mensagens</h1>

      <div className={estilos.mensagens_box}>
        <BoxMensagem>
          <p>Lembra aquele produto que você estava procurando?</p>
          <p>Ele abaixou o preço!! Corre que dá tempo de comprar.</p>
          <a href="https://www.americanas.com.br/1818873801">
            Ver produto
          </a>
        </BoxMensagem>

        <BoxMensagem>
          <p>Separamos esta foto para você.</p>
          <Image src={Globe} alt='Água'/>
        </BoxMensagem>
      </div>
    </div>
  )
}


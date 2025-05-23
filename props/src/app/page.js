import estilos from './page.module.css';
import Topo from './componentes/Topo/Topo';
import Card from './componentes/Card/Card';

import Aquario from '/public/aquario.jpg';
import Aries from '/public/aries.jpg';


export default function Home() {
  return (
    <div>
      <Topo />
      <main className={estilos.main_container}>
        <section>
          <Card
            signo={"Aquário"} dataInicio={"21/01"}
            dataFim={"19/02"} imagem={Aquario}/>
            <Card
            signo={"Aries"} dataInicio={"21/01"}
            dataFim={"19/02"} imagem={Aries}/>
         
        </section>
      </main>
    </div>
  )
}

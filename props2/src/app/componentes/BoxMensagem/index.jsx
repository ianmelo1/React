import estilos from './BoxMensagem.module.css';

export default function BoxMensagem(props) {
  return (
    <div className={estilos.box_mensagem}>
      <h2>Mensagem</h2>
      <div className={estilos.conteudo_mensagem}>
        {props.children}
      </div>
    </div>
  );
}
import Image from 'next/image';
import estilos from './Card.module.css';

export default function Card(props) {
  return (
    <div className={estilos.card_signo}>
      <h3>{props.signo}</h3>
      <Image src={props.imagem} alt={props.signo}/>
      <span>{props.dataInicio} - {props.dataFim}</span>
    </div>
  )
}
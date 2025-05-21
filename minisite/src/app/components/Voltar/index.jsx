import estilos from "./Voltar.module.css"
import Link from "next/link"

export default function Voltar() {
    return (
        <Link className = {estilos.link} href='/'>Voltar</Link>
    );
}
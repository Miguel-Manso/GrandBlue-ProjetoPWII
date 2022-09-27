import { ButtonComp } from "./style.jsx";

export default function Button({onClick, conteudo}) {
    return <ButtonComp onClick={onClick}>{conteudo}</ButtonComp>
}
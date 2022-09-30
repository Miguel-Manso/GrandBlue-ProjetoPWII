import { ButtonCompAlter, ButtonCompBlue, ButtonCompDelete, ButtonCompWhite } from "./style.jsx";

export default function Button({onClick, conteudo, estilo}) { 
        if (estilo == 1){
            return(
                <ButtonCompBlue onClick={onClick}>{conteudo}</ButtonCompBlue>
            )

        } else if (estilo == 2){
            return(
                <ButtonCompWhite onClick={onClick}>{conteudo}</ButtonCompWhite>)

         } if (estilo == 3){
            return(
                <ButtonCompDelete onClick={onClick}>{conteudo}</ButtonCompDelete>
            )

        }else {
            return(
                <ButtonCompAlter onClick={onClick}>{conteudo}</ButtonCompAlter>)

         }
       
    }
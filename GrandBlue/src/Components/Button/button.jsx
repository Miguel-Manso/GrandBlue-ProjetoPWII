import { ButtonCompAlter, ButtonCompBlue, ButtonCompDelete, ButtonCompWhite } from "./style.jsx";

export default function Button({conteudo, estilo}) { 
        if (estilo == 1){
            return(
                <ButtonCompBlue>{conteudo}</ButtonCompBlue>
            )

        } else if (estilo == 2){
            return(
                <ButtonCompWhite>{conteudo}</ButtonCompWhite>)

         } if (estilo == 3){
            return(
                <ButtonCompDelete>{conteudo}</ButtonCompDelete>
            )

        }else {
            return(
                <ButtonCompAlter>{conteudo}</ButtonCompAlter>)

         }
       
    }
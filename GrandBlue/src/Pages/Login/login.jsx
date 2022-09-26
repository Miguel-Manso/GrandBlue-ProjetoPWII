import { ButtonLogin, ContainerLogin, InputLogin, LoginBox, TituloLogin } from "./style.jsx"
import Input from "../../Components/Input/input.jsx"
import Button from "../../Components/Button/button.jsx"



export function Login(){
    return(
        <ContainerLogin>
        <LoginBox>

        <TituloLogin>Bem Vindo</TituloLogin>  

        <InputLogin>
            <Input type="text" placeholder="Email"/>
            <Input type="password" placeholder="Senha"/>
        </InputLogin>

        <ButtonLogin>
        <Button conteudo="Cadastrar"/>
        </ButtonLogin>

        </LoginBox>
        </ContainerLogin>
    )
}
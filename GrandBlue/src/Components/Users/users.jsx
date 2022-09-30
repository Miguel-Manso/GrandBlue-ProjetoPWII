
import Button from "../Button/button";
import Input from "../Input/input";
import {  NomeUser, TodosUsers, TituloUsers, UsersBox, UsersContainer } from "./style";


export function Users () {
    return (
        <UsersContainer>
        <UsersBox>

            <TituloUsers>Usuários:</TituloUsers>

            <TodosUsers>
                
                    <NomeUser>Marcinho {/* Tu vai Colocar o nome do cara do banco aqui   */}
                    <Input Id="email" Name="email" type="text" estilo="1" placeholder="Alterar Nome"/>
                    <Button onClick={()=>HandleClickButton()} conteudo="Alterar" type="button"/>
                    <Button onClick={()=>HandleClickButton()} conteudo="Deletar" type="button" estilo="3"/>
                    </NomeUser>



                    <NomeUser>Cebolinha {/* Exemplo de uma adição aqui */}
                    <Input Id="email" Name="email" type="text" estilo="1" placeholder="Alterar Nome"/>
                    <Button onClick={()=>HandleClickButton()} conteudo="Alterar" type="button"/>
                    <Button onClick={()=>HandleClickButton()} conteudo="Deletar" type="button" estilo="3"/>
                    </NomeUser>

            </TodosUsers>
            

        </UsersBox>
        </UsersContainer>
    )

}
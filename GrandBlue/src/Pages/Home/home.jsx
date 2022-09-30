import { Navbar } from "../../Components/Navbar/navbar.jsx"
import { Users } from "../../Components/Users/users.jsx"
import { Container, Paragrafo, Paragrafos, Secao, Titulo, Titulos, Texto} from "./style.jsx"


export function Home () {
    return (
        
        <Container>
            <Navbar />
            
            <Secao>
                <Titulos>
                    <Titulo>Bem-vindo à Grand Blue</Titulo>
                    <Paragrafo>Desfrute de experiências incríveis conosco</Paragrafo>
                </Titulos>
      
            </Secao>
                    <Paragrafos>
                        <Texto>
                        O mergulho é a atividade de submergir dentro da d'água que pode ser praticado com ou sem o
                        auxílio de um aparelho de respiração. Ele pode ser realizado de forma autônoma, livre 
                        (controlando a respiração) ou dependente. 
                        </Texto>
                        <Texto>
                        Infelizmente o homem não tem a capacidade de sobreviver em ambiente aquático. Para superar 
                        essa limitação, foram desenvolvidas técnicas denominadas de mergulho, que tal entrar na Grand Blue.
                        </Texto>
                    </Paragrafos>
                
                    <Users />
        </Container>
    )
}
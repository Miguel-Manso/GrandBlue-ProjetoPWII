import { Navbar } from "../../Components/Navbar/navbar.jsx"
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
                        O mergulho é definido como o ato de submergir dentro d'água que pode ser praticado 
                        de forma independente e livre, apenas controlando a respiração, como também de modo 
                        dependente, semi-dependente e autônomo, com a ajuda de um aparelho de respiração.
                        </Texto>
                        <Texto>
                        O mergulho, modalidade desportiva aquática praticada desde tempos antigos, 
                        está dividido em dois tipos: um que é feito em piscinas, a partir de pranchas 
                        e trampolins e cujo objetivo é realizar acrobacias, pontuadas por juízes, 
                        antes da entrada na água
                        </Texto>
                    </Paragrafos>
                
                
        </Container>
    )
}
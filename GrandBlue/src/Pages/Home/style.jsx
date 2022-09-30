import styled from "styled-components"
import banner from "../../Assets/Banner.png"

const Container = styled.div`
    display: block;
    overflow: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #414141;
    height: 100%;

`;
const Secao = styled.div`
    
    display: flex;
    justify-content:center;
    align-items:center;
    align-content:center;
    width: 100%;
    height: 88%;
    background-image: url(${banner});
    background-size: cover;
    box-shadow: 0px 4px 4px 2px rgba(0,0,0,0.1);

`;

const Titulos = styled.div`

    display:flex;
    flex-direction:column;
    height:20%;
    justify-items: center;
    align-items: center;

`;
const Paragrafos = styled.div`
    
    display:flex;   
    gap: 25px;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 20%;

`;
const Titulo = styled.h5`

    font-size: 5rem;
    @import url('https://fonts.googleapis.com/css2?family=Abyssinica+SIL&display=swap');
    font-family: 'Abyssinica', Georgia, 'Times New Roman', Times, serif;
    color: white;
    font-weight: lighter;
  
`;
const Paragrafo = styled.p`

    font-size: 1.5rem;
    @import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
    font-family: 'Alata', Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    justify-content: center;
    text-transform: uppercase;
  
`;
const Texto = styled.p`

    font-size: 1rem;
    @import url('https://fonts.googleapis.com/css2?family=Abyssinica+SIL&display=swap');
    font-family: 'Abyssinica', Georgia, 'Times New Roman', Times, serif;
    color: white;
    font-weight: lighter;
    text-align: justify;
    width: 50%;
    margin: 5rem;
   
`;

export { Container, Secao, Titulo, Paragrafo, Titulos, Paragrafos, Texto } 
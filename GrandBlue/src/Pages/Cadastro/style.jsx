import styled from "styled-components";
import img from '../../Assets/fundo-cadastro.jpg'


const ContainerCadastro = styled.div`
    height: 100vh;
    width: 100vw;
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
    font-family: 'Ubuntu', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${img} );
    background-size: cover;
    

`

const CadastroBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    width: 30vw;
    background-color: rgba(255,255,255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    
  
`
const ImagemCadastro = styled.img`
    width: 12rem;
    height: 12rem;
    
`

const TituloCadastro = styled.h2`
    margin: 2rem 0;
    margin-top: 0;
`

const InputCadastro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;
    gap: 7%;
    
`

const ParagraphCadastro = styled.div`
    color: white;
    text-transform: uppercase;
    margin-top: 1rem;
`
const ButtonEntrar = styled.button`
    margin-top: 5%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;

    
`

const ButtonCadastro = styled.button`
    margin: 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
`



export {ContainerCadastro, CadastroBox, TituloCadastro, InputCadastro, ButtonEntrar, ButtonCadastro, ImagemCadastro, ParagraphCadastro}
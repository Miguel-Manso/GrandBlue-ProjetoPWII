import styled from "styled-components";
import img from '../../Assets/placeholder.jpg'

const ContainerLogin = styled.div`
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

const LoginBox = styled.div`
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

const TituloLogin = styled.h2`
    margin: 3rem 0 2rem 0;
    margin-top: 30%;
`

const InputLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;
`

const ButtonLogin = styled.div`
    margin: 1rem 0 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export {ContainerLogin, LoginBox, TituloLogin, InputLogin, ButtonLogin}
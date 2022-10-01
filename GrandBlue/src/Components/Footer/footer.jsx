import { FooterDiv, FooterP, FooterSpan, ImagemFooter } from "./Style.jsx";
import Logo from "../../Assets/grandblue.svg"

export function Footer(){
  return(
    
      <FooterDiv>
        <FooterP>
        <ImagemFooter src={Logo}> 
        </ImagemFooter>

        
          <FooterSpan>Grand Blue  &copy; 2022</FooterSpan>
         
        </FooterP>

      </FooterDiv>

  )
}
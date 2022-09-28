import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './Pages/Login/Login.jsx'
import { Cadastro } from './Pages/Cadastro/cadastro.jsx'
import GlobalStyle from './Styles/global.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
    <GlobalStyle />
    
  </React.StrictMode>
)

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CadastroForncedor from './pages/CadastroForncedor'
import CadastroProduto from './pages/CadastroProduto'
import CadastroUsuario from './pages/CadastroUsuario'

import './styles/index.sass'

export default function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={ <CadastroForncedor /> } />
          <Route path='/produtos' element={<CadastroProduto/>} />
          <Route path='/usuario' element={<CadastroUsuario/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CadastroForncedor from './pages/CadastroForncedor'
import CadastroProduto from './pages/CadastroProduto'
import CadastroUsuario from './pages/CadastroUsuario'
import EntradaProduto from './pages/EntradaProduto'
import RetiradaProduto from './pages/RetiradaProduto'

import './styles/index.sass'
import ListaProdutos from './pages/ListaProdutos'
import Home from './pages/Home'

export default function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route index element={ <Home /> } />
          <Route path='/fornecedor' element={<CadastroForncedor/>} />
          <Route path='/produtos' element={<CadastroProduto/>} />
          <Route path='/usuario' element={<CadastroUsuario/>} />
          <Route path='/entrada' element={<EntradaProduto />} />
          <Route path='/retirada' element={<RetiradaProduto />} />
          <Route path='/lista' element={<ListaProdutos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
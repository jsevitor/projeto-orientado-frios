import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CadastroFornecedor from './pages/CadastroFornecedor/CadastroFornecedor'
import CadastroProduto from './pages/CadastroProduto/CadastroProduto'
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario'
import EntradaProduto from './pages/EntradaProduto/EntradaProduto'
import RetiradaProduto from './pages/RetiradaProduto/RetiradaProduto'

import './styles/index.sass'
import ListaProdutos from './pages/ListaProdutos/ListaProdutos'
import Home from './pages/Home/Home'

export default function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route index element={ <Home /> } />
          <Route path='/fornecedor' element={<CadastroFornecedor/>} />
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
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import CadastroFornecedor from './pages/CadastroFornecedor/CadastroFornecedor';
import CadastroProduto from './pages/CadastroProduto/CadastroProduto';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario';
import EntradaProduto from './pages/EntradaProduto/EntradaProduto';
import RetiradaProduto from './pages/RetiradaProduto/RetiradaProduto';
import Movimentacoes from './pages/Movimentacoes/Movimentacoes';
import PainelControle from './pages/PainelControle/PainelControle';
import ViewTabEntrada from './pages/ViewTabEntrada/ViewTabEntrada';
import ProdutosCadastrados from './pages/ProdutosCadastrados/ProdutosCadastrados';

export default () => {

    return(
        <Routes>
          <Route index element={ <Home /> } />
          <Route path='/fornecedor' element={<CadastroFornecedor/>} />
          <Route path='/produtos' element={<CadastroProduto/>} />
          <Route path='/usuario' element={<CadastroUsuario/>} />
          <Route path='/entrada' element={<EntradaProduto />} />
          <Route path='/retirada' element={<RetiradaProduto />} />
          <Route path='/produtos-cadastrados' element={<ProdutosCadastrados />} />
          <Route path='/movimentacoes' element={<Movimentacoes />} />
          <Route path='/painel-controle' element={<PainelControle />} />
          <Route path='/tabela-entradas' element={<ViewTabEntrada />} />
        </Routes>
    );
}
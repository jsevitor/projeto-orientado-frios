import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import CadastroFornecedor from './pages/CadastroFornecedor/CadastroFornecedor';
import CadastroProduto from './pages/CadastroProduto/CadastroProduto';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario';
import EntradaProduto from './pages/EntradaProduto/EntradaProduto';
import RetiradaProduto from './pages/RetiradaProduto/RetiradaProduto';
import Movimentacoes from './pages/Movimentacoes/Movimentacoes';
import PainelControle from './pages/PainelControle/PainelControle';
import ProdutosCadastrados from './pages/ProdutosCadastrados/ProdutosCadastrados';
import EntradasCadastradas from './pages/EntradasCadastradas/EntradasCadastradas';
import RetiradasCadastradas from './pages/RetiradasCadastradas/RetiradasCadastradas';

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
          <Route path='/entradas-cadastradas' element={<EntradasCadastradas />}/>
          <Route path='/retiradas-cadastradas' element={<RetiradasCadastradas />}/>
          <Route path='/painel-controle' element={<PainelControle />} />
        </Routes>
    );
}
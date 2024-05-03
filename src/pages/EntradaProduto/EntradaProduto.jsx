import HeaderBar from '../../components/HeaderBar/HeaderBar'
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu"

import '../../styles/cadastros.sass'
import '../EntradaProduto/entradaProduto.sass'

export default function EntradaProduto() {
    return (
        <div className='entrada'>
            <HeaderBar />
            <div className="page_container">
                <SideBarMenu />
                <div className="content_container">
                    <div className='card'>
                        <div className="card_header">
                            <h2>Entrada de Produto</h2>
                            <i class='bx bx-message-square-add' ></i>
                        </div>
                        <div className="card_body">
                            <div className="forms">
                                <label htmlFor="">ID</label>
                                <input type="text" />
                            </div>
                            <div className="forms similar">
                                <label htmlFor="">Produto</label>
                                <input type="text" />
                            </div>
                            <div className="forms">
                                <label htmlFor="">Quantidade</label>
                                <input type="text" />
                            </div>
                            <div className="forms similar">
                                <label htmlFor="">Forncedor</label>
                                <select name="account_type">
                                    <option value="">Selecione</option>
                                    <option value="">Fornecedor 1</option>
                                    <option value="">Fornecedor 2</option>
                                    <option value="">Fornecedor 3</option>
                                </select>
                            </div>
                            <div className="forms">
                                <label htmlFor="">Data de Entrada</label>
                                <input type="date" />
                            </div>
                            <div className="forms">
                                <label htmlFor="">Número de Lote</label>
                                <input type="text" />
                            </div>
                            <div className="forms">
                                <label htmlFor="">Preço de Compra</label>
                                <input type="text" />
                            </div>
                            <div className="action_btn commum">
                                <div className="btn">Adicionar</div>
                                <div className="btn">Remover</div>
                                <div className="btn">Editar</div>
                                <div className="btn">Cancelar</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
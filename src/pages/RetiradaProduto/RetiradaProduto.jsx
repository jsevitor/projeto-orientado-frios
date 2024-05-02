import HeaderBar from '../../components/HeaderBar/HeaderBar'
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu"

import '../../styles/cadastros.sass'
import '../RetiradaProduto/retiradaProduto.sass'

export default function RetiradaProduto() {
    return (
        <div className='retirada'>
            <HeaderBar />
            <div className="page_container">
                <SideBarMenu />
                <div className="content_container">
                    <div className='card'>
                        <div className="card_header">
                            <h2>Retirada de Produto</h2>
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
                                <label htmlFor="">Descrição / Tipo de Saída</label>
                                <input type="text" />
                            </div>
                            <div className="forms">
                                <label htmlFor="">Data de Retirada</label>
                                <input type="date" />
                            </div>
                            <div className="forms">
                                <label htmlFor="">Número de Lote</label>
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
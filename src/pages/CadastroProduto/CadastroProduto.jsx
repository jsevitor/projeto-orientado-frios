import React from 'react';

import '../../styles/cadastros.sass'
import '../CadastroProduto/cadastroProduto.sass'

export default function CadastroProduto() {
    return (
                <div className="produto content_container">
                    <div className='card'>
                        <div className="card_header">
                            <h2>Cadastro de Produto</h2>
                            <i className='bx bx-package'></i>
                        </div>
                        <div className="card_body">
                            <div className="forms">
                                <label htmlFor="">ID</label>
                                <input type="text" />
                            </div>
                            <div className="forms similar">
                                <label htmlFor="">Nome</label>
                                <input type="text" />
                            </div>
                            <div className="forms">
                                <label htmlFor="">Categoria</label>
                                <select name="account_type">
                                    <option value="">Selecione</option>
                                    <option value="">Categoria 1</option>
                                    <option value="">Categoria 2</option>
                                    <option value="">Categoria 3</option>
                                </select>
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
                                <label htmlFor="">Marca</label>
                                <input type="text" />
                            </div>
                            <div className="forms picture">
                                <label htmlFor="">Imagem</label>
                                <input type="file" />
                            </div>
                            <div className='picture_view commum'>
                                <span>
                                    Teste
                                </span>
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
    );
}
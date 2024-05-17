// IMPORTAÇÃO DE BIBLIOTECAS
import React from 'react';

// IMPORTAÇÃO DE REACT COMPONENTS
import Button from '../../components/Button/Button';

// IMPORTAÇÃO DE ESTILOS CSS
import '../../styles/cadastros.sass';
import '../RetiradaProduto/retiradaProduto.sass';

export default function RetiradaProduto() {

    return (
        <div className="retirada content_container">
            <div className='card'>
                <div className="card_header">
                    <h2>Retirada de Produto</h2>
                    <i className='bx bx-message-square-minus' ></i>
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
                        <Button label={"Adicionar"}/>
                        <Button label={"Cancelar"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
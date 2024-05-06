import React from 'react';

import HeaderBar from '../../components/HeaderBar/HeaderBar';
import SideBarMenu from '../../components/SideBarMenu/SideBarMenu';

import '../Movimentacoes/movimentacoes.sass'

export default function Movimentacoes({ products }) {
    return (

        <div className='lista'>
            <HeaderBar />
            <div className="page_container">
                <SideBarMenu />
                <div className="content_container">
                    <table className='table'>
                        <thead className='table_header'>
                            <tr>
                                <th>ID</th>
                                <th>Produto</th>
                                <th>Data de Saída</th>
                                <th>Quantidade</th>
                                <th>Forma de Pagamento</th>
                                <th>Valor Un. Compra</th>
                                <th>Valor Total Compra</th>
                                <th>Valor Un. Saída</th>
                                <th>Valor Total Saída</th>
                                <th>Lucro</th>
                            </tr>
                        </thead>
                        <tbody className='table_body'>
                            <tr>
                                <th>ID</th>
                                <th>Produto</th>
                                <th>Data de Saída</th>
                                <th>Quantidade</th>
                                <th>Forma de Pagamento</th>
                                <th>Valor Un. Compra</th>
                                <th>Valor Total Compra</th>
                                <th>Valor Un. Saída</th>
                                <th>Valor Total Saída</th>
                                <th>Lucro</th>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}


import React from 'react';

import HeaderBar from '../../components/HeaderBar/HeaderBar';
import SideBarMenu from '../../components/SideBarMenu/SideBarMenu';

import '../Movimentacoes/movimentacoes.sass'

export default function Movimentacoes({ products }) {
    return (

        <div className='movimentation'>
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
                                <td>ID</td>
                                <td>Produto</td>
                                <td>Data de Saída</td>
                                <td>Quantidade</td>
                                <td>Forma de Pagamento</td>
                                <td>Valor Un. Compra</td>
                                <td>Valor Total Compra</td>
                                <td>Valor Un. Saída</td>
                                <td>Valor Total Saída</td>
                                <td>Lucro</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}


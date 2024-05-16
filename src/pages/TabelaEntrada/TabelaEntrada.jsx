import React from 'react';

import '../TabelaEntrada/tabelaEntrada.sass';

export default function TabelaEntrada() {

    return (
        <div className="view_entrada content_container">
            <table className='table'>
                <thead className='table_header'>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Fornecedor</th>
                        <th>Data de Entrada</th>
                        <th>Número de Lote</th>
                        <th>Preço de Compra</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='table_body'>
                    
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <i class='bx bx-trash'></i>
                                <i class='bx bx-edit'></i>
                            </td>
                        </tr>
                </tbody>
            </table>

        </div>
    );
}
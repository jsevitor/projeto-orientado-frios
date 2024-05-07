import React from 'react';

import '../TabelaEntradas/tabelaEntradas.sass'

export default function TabelaEntradas({ }) {
    return (
        <table className='table_entry'>
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
                    <th></th>
                </tr>
            </thead>
            <tbody className='table_body'>

                <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <i class='bx bx-edit'></i>
                    </td>
                    <td>
                        <i class='bx bx-trash'></i>
                    </td>
                </tr>

            </tbody>
        </table >
    );
}


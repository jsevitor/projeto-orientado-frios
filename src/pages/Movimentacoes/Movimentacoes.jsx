import React from 'react';

import '../Movimentacoes/movimentacoes.sass'

import data from '../../data/data.json'

export default function Movimentacoes({ }) {

    return (
        <div className="movimentation content_container">
            <div className='page_title'>
                <h3>Movimentações</h3>
                <div className='filters'>
                    <input type="text" placeholder='Pesquisar' />
                    <div>
                        <span>Filtros</span>
                        <i className='bx bx-filter-alt'></i>
                    </div>
                </div>
            </div>
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
                    {data.movimentacoes.map((product, index) => (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.produto}</td>
                            <td>{product.data_saida}</td>
                            <td>{product.quantidade}</td>
                            <td>{product.forma_pagamento}</td>
                            <td>R${product.valor_unidade_compra},00</td>
                            <td>R${product.valor_total_compra},00</td>
                            <td>R${product.valor_unidade_saida},00</td>
                            <td>R${product.valor_total_saida},00</td>
                            <td>R${product.lucro},00</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

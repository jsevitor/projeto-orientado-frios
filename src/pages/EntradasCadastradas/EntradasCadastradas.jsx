// IMPORTAÇÃO DE BIBLIOTECAS
import React from 'react';

// IMPORTAÇÃO DE REACT COMPONENTS

// IMPORTAÇÃO DE ESTILOS CSS
import '../EntradasCadastradas/entradasCadastradas.sass';

// IMPORTAÇÃO DE DADOS
import data from '../../data/data.json'

export default function EntradasCadastradas() {

    return (
        <div className="entradas_cadastradas content_container">
            <div className='page_title'>
                <h3>Entradas</h3>
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
                        <th>Quantidade</th>
                        <th>Fornecedor</th>
                        <th>Data de Entrada</th>
                        <th>Número de Lote</th>
                        <th>Preço de Compra</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='table_body'>
                    {data.entradas.map((product, index) => (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.produto}</td>
                            <td>{product.quantidade}</td>
                            <td>{product.fornecedor}</td>
                            <td>{product.data_entrada}</td>
                            <td>{product.numero_lote}</td>
                            <td>R${product.preco_compra},00</td>
                            <td>
                                <i class='bx bx-trash'></i>
                                <i class='bx bx-edit'></i>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    );
}
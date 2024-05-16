import React from 'react';

import data from '../../data/data.json';

import './produtosCadastrados.sass';

export default function ProdutosCadastrados() {
    return (
        <div className="produtosCadastrados content_container">
            <div className='page_title'>
                <h3>Produtos Cadastrados</h3>
                <div className='filters'>
                    <input type="text" placeholder='Pesquisar'/>
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
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Fornecedor</th>
                        <th>Marca</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='table_body'>
                    {data.produtos.map((product, index) => (
                        <tr key={index}>
                            <td className='middle'>{product.id}</td>
                            <td className='middle'><img src={product.foto} /></td>
                            <td>{product.nome}</td>
                            <td>{product.categoria}</td>
                            <td>{product.fornecedor}</td>
                            <td>{product.marca}</td>
                            <td className='middle'>
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

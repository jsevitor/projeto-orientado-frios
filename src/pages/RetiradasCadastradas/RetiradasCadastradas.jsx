// IMPORTAÇÃO DE BIBLIOTECAS
import React from 'react';

// IMPORTAÇÃO DE REACT COMPONENTS

// IMPORTAÇÃO DE ESTILOS CSS
import '../RetiradasCadastradas/retiradasCadastradas.sass';

// IMPORTAÇÃO DE DADOS
import data from '../../data/data.json'

export default function RetiradasCadastradas() {

    return (
        <div className="retiradas_cadastradas content_container">
            <div className='page_title'>
                <h3>Retiradas</h3>
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
                        <th>Tipo de Saída</th>
                        <th>Data de Retirada</th>
                        <th>Número de Lote</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='table_body'>
                    {data.retiradas.map((product, index) => (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.produto}</td>
                            <td>{product.quantidade}</td>
                            <td>{product.descricao_tipo_saida}</td>
                            <td>{product.data_retirada}</td>
                            <td>{product.numero_lote}</td>
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
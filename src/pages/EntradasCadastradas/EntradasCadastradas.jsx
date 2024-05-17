// IMPORTAÇÃO DE BIBLIOTECAS
import React, { useState } from 'react';

// IMPORTAÇÃO DE REACT COMPONENTS
import Modal from '../../components/Modal/Modal';

// IMPORTAÇÃO DE ESTILOS CSS
import '../EntradasCadastradas/entradasCadastradas.sass';

// IMPORTAÇÃO DE DADOS
import data from '../../data/data.json'

export default function EntradasCadastradas() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const openModal = () => {
        // setItemToDelete();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setItemToDelete(null);
    };

    const deleteItem = () => {
        // Lógica de exclusão do item
        console.log(`Item ${itemToDelete} excluído.`);
        closeModal();
    };

    return (
        <div className="entradas_cadastradas content_container">
            <div>
                {isModalOpen && (
                    <Modal
                        closeModal={closeModal}
                        confirmAction={deleteItem}
                        message={`Tem certeza que deseja deletar esse item?`}
                    />
                )}
            </div>
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
                                <i class='bx bx-trash' onClick={openModal}></i>
                                <i class='bx bx-edit'></i>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    );
}
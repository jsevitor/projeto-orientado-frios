// IMPORTAÇÃO DE BIBLIOTECAS
import React, { useState } from 'react';

// IMPORTAÇÃO DE REACT COMPONENTS
import Modal from '../../components/Modal/Modal';

// IMPORTAÇÃO DE ESTILOS CSS
import './produtosCadastrados.sass';

// IMPORTAÇÃO DE DADOS
import data from '../../data/data.json';

export default function ProdutosCadastrados() {
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
        <div className="produtosCadastrados content_container">
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
                <h3>Produtos Cadastrados</h3>
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
                                <i class='bx bx-trash' onClick={() => openModal('Item 1')}></i>
                                <i class='bx bx-edit'></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

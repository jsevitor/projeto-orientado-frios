import React from 'react';

import '../TabelaProdutos/tabelaProdutos.sass'

export default function TabelaProdutos({ products }) {
  return (
    <table className='tabela'>
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
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.id}</td>
            <td><img src={product.foto} style={{ width: '50px', height: 'auto' }} /></td>
            <td>{product.nome}</td>
            <td>{product.categoria}</td>
            <td>{product.fornecedor}</td>
            <td>{product.marca}</td>
            <td>
              <i class='bx bx-trash'></i>
              <i class='bx bx-edit'></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


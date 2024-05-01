import React from 'react';

import '../styles/components/tabelaProdutos.sass'

export default function TabelaProdutos({ products }) {
  return (
    <table className='tabela'>
      <thead className='table_header'>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Fornecedor</th>
          <th>Marca</th>
          <th>Foto</th>
        </tr>
      </thead>
      <tbody className='table_body'>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.id}</td>
            <td>{product.nome}</td>
            <td>{product.categoria}</td>
            <td>{product.fornecedor}</td>
            <td>{product.marca}</td>
            <td><img src={product.foto} alt={product.nome} style={{ width: '50px', height: 'auto' }} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


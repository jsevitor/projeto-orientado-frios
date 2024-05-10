import React from 'react';

import TabelaProdutos from '../../components/TabelaProdutos/TabelaProdutos';

import data from '../../assets/data.json';

export default function ListaProdutos() {
    return (
        <div className="lista content_container">
            <TabelaProdutos products={data.produtos} />
        </div>
    );
}

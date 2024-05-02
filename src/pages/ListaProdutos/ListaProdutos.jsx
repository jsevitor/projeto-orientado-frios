import React from 'react';
import TabelaProdutos from '../../components/TabelaProdutos/TabelaProdutos';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import SideBarMenu from '../../components/SideBarMenu/SideBarMenu';
import data from '../../assets/data.json';

export default function ListaProdutos() {
    return (
        <div className='lista'>
            <HeaderBar />
            <div className="page_container">
                <SideBarMenu />
                <div className="content_container">
                    <TabelaProdutos products={data.produtos} />
                </div>
            </div>
        </div>
    );
}

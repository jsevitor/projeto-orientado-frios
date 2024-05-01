import React from 'react';
import TabelaProdutos from '../components/TabelaProdutos';
import data from '../assets/data.json';
import HeaderBar from '../components/HeaderBar';
import SideBarMenu from '../components/SideBarMenu';

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

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../SideBarMenu/sideBarMenu.sass';

export default function SideBarMenu() {
    const [isOpenProdutosSubMenu, setIsOpenProdutosSubMenu] = useState(() => {
        return localStorage.getItem('isOpenProdutosSubMenu') === 'true';
    });
    const [isOpenCadastrosSubMenu, setIsOpenCadastrosSubMenu] = useState(() => {
        return localStorage.getItem('isOpenCadastrosSubMenu') === 'true';
    });
    const [menuCollapsed, setMenuCollapsed] = useState(() => {
        return localStorage.getItem('menuCollapsed') === 'true';
    });

    useEffect(() => {
        localStorage.setItem('isOpenProdutosSubMenu', isOpenProdutosSubMenu);
        localStorage.setItem('isOpenCadastrosSubMenu', isOpenCadastrosSubMenu);
        localStorage.setItem('menuCollapsed', menuCollapsed);
    }, [isOpenProdutosSubMenu, isOpenCadastrosSubMenu, menuCollapsed]);

    const toggleProdutosSubMenu = () => {
        setIsOpenProdutosSubMenu(!isOpenProdutosSubMenu);

        if (menuCollapsed) {
            setMenuCollapsed(!menuCollapsed)
        }
    };

    const toggleCadastrosSubMenu = () => {
        setIsOpenCadastrosSubMenu(!isOpenCadastrosSubMenu);

        if (menuCollapsed) {
            setMenuCollapsed(!menuCollapsed)
        }
    };

    const toggleMenu = () => {
        setMenuCollapsed(!menuCollapsed);

        if (isOpenProdutosSubMenu) {
            setIsOpenProdutosSubMenu(!isOpenProdutosSubMenu)
        }

        if (isOpenCadastrosSubMenu) {
            setIsOpenCadastrosSubMenu(!isOpenCadastrosSubMenu)
        }
    };

    return (
        <nav className={`nav_container ${menuCollapsed ? 'collapsed' : ''}`}>
            <div id="hideMenu" onClick={toggleMenu}>
                <i className={`bx ${menuCollapsed ? 'bx-chevron-right-circle' : 'bx-chevron-left-circle'}`}></i>
            </div>

            <div className="nav_group">
                <ul className="menu_list">
                    <li className='list_item'>
                        <div className="nav_link">
                            <Link to="/" className='menu_option'>
                            <i className='bx bx-home'></i>
                                {!menuCollapsed && <h2>Início</h2>}
                            </Link>
                        </div>
                    </li>
                    <li className='list_item'>
                        <div className="nav_link">
                            <Link to="#" className='menu_option' onClick={toggleProdutosSubMenu}>
                                <i className='bx bx-package'></i>
                                {!menuCollapsed && <h2>Produtos</h2>}
                                {!menuCollapsed &&
                                    <i className={`bx ${isOpenProdutosSubMenu ? 'bx-chevron-up' : 'bx-chevron-down'}`} ></i>
                                }
                            </Link>
                        </div>
                        {isOpenProdutosSubMenu &&
                            <ul className={`subMenu ${isOpenProdutosSubMenu ? 'collapsedSubMenu' : ''}`}>
                                <li className="nav_link"><Link to="/entrada"><h3>Entrada de Produtos</h3></Link></li>
                                <li className="nav_link"><Link to="/retirada"><h3>Retirada de Produtos</h3></Link></li>
                                <li className="nav_link"><Link to="/lista-produtos"><h3>Lista de Produtos</h3></Link></li>
                            </ul>
                        }
                    </li>
                    <li className='list_item'>
                        <div className="nav_link">
                            <Link to="#" className='menu_option' onClick={toggleCadastrosSubMenu}>
                                <i className='bx bx-id-card' ></i>
                                {!menuCollapsed && <h2>Cadastros</h2>}
                                {!menuCollapsed &&
                                    <i className={`bx ${isOpenCadastrosSubMenu ? 'bx-chevron-up' : 'bx-chevron-down'}`} ></i>
                                }
                            </Link>
                        </div>
                        {isOpenCadastrosSubMenu &&
                            <ul className={`subMenu ${isOpenCadastrosSubMenu ? 'collapsedSubMenu' : ''}`}>
                                <li className="nav_link"><Link to="/fornecedor"><h3>Cadastro de Fornecedor</h3></Link></li>
                                <li className="nav_link"><Link to="/produtos"><h3>Cadastro de Produtos</h3></Link></li>
                                <li className="nav_link"><Link to="/usuario"><h3>Cadastro de Usuário</h3></Link></li>
                            </ul>
                        }
                    </li>
                    <li className='list_item'>
                        <div className="nav_link">
                            <Link to="/movimentacoes">
                                <i className='bx bx-transfer' ></i>
                                {!menuCollapsed && <h2>Movimentações</h2>}
                            </Link>
                        </div>
                    </li>
                    <li className='list_item'>
                        <div className="nav_link">
                            <Link to="/painel-controle">
                                <i className='bx bx-cog' ></i>
                                {!menuCollapsed && <h2>Painel de Controle</h2>}
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
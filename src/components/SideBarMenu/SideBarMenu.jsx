import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAddressCard,
    faArrowRightArrowLeft,
    faChevronCircleLeft,
    faClipboardList,
    faGear,

} from '@fortawesome/free-solid-svg-icons';

import '../SideBarMenu/sideBarMenu.sass'

export default function SideBarMenu() {

    return (
        <nav className="nav_container">
            <div id="hideMenu">
                <FontAwesomeIcon icon={faChevronCircleLeft} className="icons" />
            </div>

            <ul className="menu">
                <li>
                    <a href="/">
                        <FontAwesomeIcon icon={faGear} className="icons" />
                        <h2>Painel de Controle</h2>
                    </a>
                </li>
                <li>
                    <a href="/entrada">
                        <FontAwesomeIcon icon={faClipboardList} className="icons" />
                        <h2>Produtos</h2>
                    </a>
                    <ul className='subMenu'>
                        <li><a href="/entrada"><h3>Entrada de Produtos</h3></a></li>
                        <li><a href="/retirada"><h3>Retirada de Produtos</h3></a></li>
                        <li><a href="/lista"><h3>Lista de Produtos</h3></a></li>
                    </ul>
                </li>
                <li>
                    <a href="/fornecedor">
                        <FontAwesomeIcon icon={faAddressCard} className="icons" />
                        <h2>Cadastros</h2>
                    </a>
                    <ul className='subMenu'>
                        <li><a href="/fornecedor"><h3>Cadastro de Fornecedor</h3></a></li>
                        <li><a href="/produtos"><h3>Cadastro de Produtos</h3></a></li>
                        <li><a href="/usuario"><h3>Cadastro de Usuário</h3></a></li>
                    </ul>
                </li>
                <li>
                    <a href="">
                        <FontAwesomeIcon icon={faArrowRightArrowLeft} className="icons" />
                        <h2>Movimentações</h2>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
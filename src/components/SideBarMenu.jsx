import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faArrowRightArrowLeft, faArrowsLeftRightToLine, faCircle, faClipboardList, faGear, faList } from '@fortawesome/free-solid-svg-icons';

import '../styles/components/sideBarMenu.sass'

export default function SideBarMenu() {
    
    return(
        <nav className="nav_container">
            <ul className="menu">
                <li>
                    <a href="">
                        <FontAwesomeIcon icon={faGear} className="icons" />
                        <h2>Painel de Controle</h2>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faClipboardList} className="icons" />
                        <h2>Produtos</h2>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faAddressCard} className="icons" />
                        <h2>Cadastros</h2>
                    </a>
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
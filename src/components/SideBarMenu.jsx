import '../styles/components/sideBarMenu.sass'

export default function SideBarMenu() {
    
    return(
        <nav className="nav_container">
            <ul className="menu">
                <li>
                    <a href="">
                        <h2>Painel de Controle</h2>
                    </a>
                </li>
                <li>
                    <a href="">
                        <h2>Produtos</h2>
                    </a>
                </li>
                <li>
                    <a href="">
                        <h2>Cadastros</h2>
                    </a>
                </li>
                <li>
                    <a href="">
                        <h2>Movimentações</h2>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
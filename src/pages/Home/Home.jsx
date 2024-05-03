import HeaderBar from "../../components/HeaderBar/HeaderBar";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";

import '../Home/home.sass'

export default function Home() {
    return (
        <div className='welcome'>
            <HeaderBar />
            <div className="page_container">
                <SideBarMenu />
                <div className="content_container">
                   <span>
                       <h1>Bem-vindo!</h1>
                       <p>(Alguma coisa aqui)</p>
                   </span>
                </div>
            </div>
        </div>
    );
}
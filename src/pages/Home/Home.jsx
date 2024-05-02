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
                   
                </div>
            </div>
        </div>
    );
}
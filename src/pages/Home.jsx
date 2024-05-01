import HeaderBar from "../components/HeaderBar";
import SideBarMenu from "../components/SideBarMenu";

import '../styles/pages/home.sass'

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
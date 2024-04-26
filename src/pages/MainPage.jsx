import HeadereBar from "../components/HeaderBar";
import SideBarMenu from "../components/SideBarMenu";

import '../styles/pages/mainPage.sass'

export default function MainPage() {
    return (
        <>  <HeadereBar /> 
            <div className="main_page_container">
                <SideBarMenu />
                <div className="small_container">
                    ggg
                </div>
            </div>    
        </>
    );
}
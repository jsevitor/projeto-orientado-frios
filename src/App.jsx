import { BrowserRouter } from 'react-router-dom';

import HeaderBar from './components/HeaderBar/HeaderBar';
import SideBarMenu from './components/SideBarMenu/SideBarMenu';
import Routes from './Routes';

import './styles/index.sass';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderBar />
        <div className="page_container">
          <SideBarMenu />
          <Routes />
        </div>
      </BrowserRouter>
    </>
  )
}
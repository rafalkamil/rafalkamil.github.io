import SideNavBar from '../SideNavBar';
import './index.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="App">
            <><SideNavBar/></>
            <div className='page'>

                <Outlet />

            </div>
        </div>

    )
}

export default Layout

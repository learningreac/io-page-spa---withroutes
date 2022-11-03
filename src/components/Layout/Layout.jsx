import './layout.css'
import { Outlet } from "react-router-dom";
import Header from '../Common/Header'
import Sidebar from '../Common/Sidebar'



const Layout = () => {
    return (
        <div className="app">
            <div className='header'>
                <Header />
            </div>

            <div className="main">
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className="dashbord-container m-3">
                    <Outlet />
                </div>
            </div>

        </div>
    )
}

export default Layout
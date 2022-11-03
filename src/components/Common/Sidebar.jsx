import './sidebar.css'
import { sidebardata } from '../../data/sidebar_data'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar_container pt-4" >
      <nav className="nav flex-column">
        {sidebardata.map((item) => {
          return (
            <div className="nav-link sidebar-option" key={item.id} id={item.label}>

              <Link to={item.label}>
                {item.icon}
                {item.label}
              </Link>
            </div>
          )
        })}
      </nav>
    </div>
  )
}

export default Sidebar

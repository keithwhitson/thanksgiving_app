import Reach from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav className="navbar navbar-expand-sm navbar-light bg-light"> 
    <div class="collapse navbar-collapse" id="navbarNav">    
        <ul class="navbar-nav">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/starters" className="nav-link">Starters</Link>
            </li>

            <li className="nav-item">
                <Link to="/desserts" className="nav-link">Desserts</Link>
            </li>
            <li className="nav-item">
                <Link to="/maincourse" className="nav-link">Main Courses</Link>
            </li>

            {/* <li className="nav-item">
                <Link to="/drinks" className="nav-link">Drinks</Link>
            </li> */}
        </ul>
        </div>
    </nav>



);

export default NavBar;

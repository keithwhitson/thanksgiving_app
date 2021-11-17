import Reach from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <>
    <div className="header-container">
    <nav className="NavbarItems"> 
    <div  id="">    
        <ul class="linked-list">
            <li className="">
                <Link to="/" className="">Home</Link>
            </li>
            <li className="">
                <Link to="/starters" className="">Starters</Link>
            </li>

            <li className="">
                <Link to="/desserts" className="">Desserts</Link>
            </li>
            <li className="">
                <Link to="/maincourse" className="">Main Courses</Link>
            </li>

            <li className="">
                <Link to="/drinks" className="">Drinks</Link>
            </li> 
        </ul>
        </div>
    </nav>
    </div>
    </>

);

export default NavBar;

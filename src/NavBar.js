import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [showLinks, setShowLinks] = useState(false);
    return(
    <>
    <div className="header-container">
    <nav className="NavbarItems"> 
    <button className="toggleButton" onClick={() => setShowLinks(!showLinks)}>Open</button>
    <div  id="">    
    
        <ul class="linked-list" id={showLinks ? "hidden" : ""}>
            <li className="links">
                <Link to="/" className="">Home</Link>
            </li>
            <li className="links">
                <Link to="/starters" className="">Starters</Link>
            </li>

            <li className="links">
                <Link to="/desserts" className="">Desserts</Link>
            </li>
            <li className="links">
                <Link to="/maincourse" className="">Main Courses</Link>
            </li>

            <li className="links">
                <Link to="/drinks" className="">Drinks</Link>
            </li> 

        </ul>
                
        </div>
    </nav>
    </div>
    </>);

    };

export default NavBar;
